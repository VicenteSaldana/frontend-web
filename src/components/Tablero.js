import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { async } from 'q';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default class Tablero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hexSize: 50,
      hexOrigin: { x: 55, y: 55 },
      currentHex: {
        q: 0, r: 0, s: 0, x: 55, y: 55,
      },
      playerPosition: {
        q: 0, r: 0, s: 0, x: 55, y: 55,
      },
      Base: {
        q: 0, r: 0, s: 0, x: 55, y: 55,
      },
      clickedHexs: [{ q: 0, r: 0, s: 0 }],
      clickedid: [{ q: 0, r: 0, s: 0 }],
      objetos: [],
      tablero: null,
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    const hexParameters = this.getHexParameters();
    this.setState({
      canvasSize: { canvasWidth: 800, canvasHeight: 600 },
      hexParameters,
    });
  }

  componentDidMount() {
    this.tablero();
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    this.canvasHex.width = canvasWidth;
    this.canvasHex.height = canvasHeight;
    this.canvasCoordinates.width = canvasWidth;
    this.canvasCoordinates.height = canvasHeight;
    const { playerPosition } = this.state;
    this.getCanvasPosition(this.canvasCoordinates);
    this.drawHexes();
    this.drawHex(this.canvasCoordinates, this.Point(this.state.Base.x, this.state.Base.y), 'red', 2, 'red');
    this.drawHex(this.canvasCoordinates, this.Point(this.state.Base.x, this.state.Base.y), 'red', 2, 'red');
    this.drawNeighbors(this.Hex(playerPosition.q, playerPosition.r, playerPosition.s));
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.currentHex !=== this.state.currentHex) {
      const {
        q, r, s, x, y,
      } = nextState.currentHex;
      const { canvasWidth, canvasHeight } = this.state.canvasSize;
      const ctx = this.canvasCoordinates.getContext('2d');
      const { playerPosition } = this.state;
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      this.drawNeighbors(this.Hex(playerPosition.q, playerPosition.r, playerPosition.s));
      this.drawClickedHexes();
      this.drawHex(this.canvasCoordinates, this.Point(x, y), 'red', 2, 'darkgreen');
      return true;
    }
    return false;
  }

  tablero = async () => {
    const qLeftSide = 1;
    const qRightSide = 5;
    const rTopSide = 1;
    const rBottomSide = 5;
    const response = await axios.post(`${SERVER_URL}/tableros/`, {
      QMax: qRightSide,
      QMin: qLeftSide,
      RMax: rBottomSide,
      RMin: rTopSide,
    });
    this.setState({

      tablero: response.data.tablero,
      rata: response.data.rata,
    });
  };

  drawClickedHexes() {
    this.state.clickedHexs.map((h) => this.drawClickedHex(h));
  }

  drawHex(canvasID, center, lineColor, width, fillColor) {
    for (let i = 0; i <= 5; i++) {
      const start = this.getHexCornerCoord(center, i);
      const end = this.getHexCornerCoord(center, i + 1);
      this.fillHex(canvasID, center, fillColor);
      this.drawLine(canvasID, start, end, lineColor, width);
    }
  }

  drawHexes() {
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    const {
      hexWidth, hexHeight, vertDist, horizDist,
    } = this.state.hexParameters;
    const { hexOrigin } = this.state;
    const qLeftSide = Math.round(hexOrigin.x / horizDist);
    const qRightSide = Math.round((canvasWidth - hexOrigin.x) / horizDist);
    const rTopSide = Math.round(hexOrigin.y / vertDist);
    const rBottomSide = Math.round((canvasHeight - hexOrigin.y) / vertDist);
    let p = 0;
    for (let r = 0; r <= rBottomSide; r++) {
      if (r % 2 === 0 && r !=== 0) {
        p++;
      }
      for (let q = -qLeftSide; q <= qRightSide; q++) {
        const { x, y } = this.hexToPixel(this.Hex(q - p, r));
        if ((x > hexWidth / 2 && x < canvasWidth - hexWidth / 2) && (y > hexHeight / 2 && y < canvasHeight - hexHeight / 2)) {
          this.drawHex(this.canvasHex, this.Point(x, y), 'black', 1, 'lightgreen');
          this.drawHexCoordinates(this.canvasHex, this.Point(x, y), this.Hex(q - p, r, -(q - p) - r));
        }
      }
    }
    let n = 0;
    for (let r = -1; r >= -rTopSide; r--) {
      if (r % 2 !=== 0) {
        n++;
      }
      for (let q = -qLeftSide; q <= qRightSide; q++) {
        const { x, y } = this.hexToPixel(this.Hex(q + n, r));
        if ((x > hexWidth / 2 && x < canvasWidth - hexWidth / 2) && (y > hexHeight / 2 && y < canvasHeight - hexHeight / 2)) {
          this.drawHex(this.canvasHex, this.Point(x, y), 'black', 1, 'lightgreen');
          this.drawHexCoordinates(this.canvasHex, this.Point(x, y), this.Hex(q + n, r, -(q + n) - r));
        }
      }
    }
  }

  Hex(q, r, s) {
    return { q, r, s };
  }

  hexToPixel(hex) {
    const { hexOrigin } = this.state;
    const x = this.state.hexSize * (Math.sqrt(3) * hex.q + Math.sqrt(3) / 2 * hex.r) + hexOrigin.x;
    const y = this.state.hexSize * (3.0 / 2 * hex.r) + hexOrigin.y;
    return this.Point(x, y);
  }

  pixelToHex(p) {
    const size = this.state.hexSize;
    const origin = this.state.hexOrigin;
    const q = ((p.x - origin.x) * Math.sqrt(3) / 3 - (p.y - origin.y) / 3) / size;
    const r = (p.y - origin.y) * 2 / 3 / size;
    return this.Hex(q, r, -q - r);
  }

  cubeDirection(direction) {
    const cubeDirections = [this.Hex(1, 0, -1), this.Hex(1, -1, 0), this.Hex(0, -1, 1),
      this.Hex(-1, 0, 1), this.Hex(-1, 1, 0), this.Hex(0, 1, -1)];
    return cubeDirections[direction];
  }

  cubeAdd(a, b) {
    return this.Hex(a.q + b.q, a.r + b.r, a.s + b.s);
  }

  getCubeNeighbor(h, direction) {
    return this.cubeAdd(h, this.cubeDirection(direction));
  }

  cubeRound(frac) {
    let q = Math.round(frac.q);
    let r = Math.round(frac.r);
    let s = Math.round(frac.s);

    const q_diff = Math.abs(q - frac.q);
    const r_diff = Math.abs(r - frac.r);
    const s_diff = Math.abs(s - frac.s);

    if (q_diff > r_diff && q_diff > s_diff) {
      q = -r - s;
    } else if (r_diff > s_diff) {
      r = -q - s;
    } else {
      s = -q - r;
    }
    return this.Hex(q, r, s);
  }

  drawLine(canvasID, start, end, color, width) {
    const ctx = canvasID.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.closePath();
  }

  fillHex(canvasID, center, color) {
    const c0 = this.getHexCornerCoord(center, 0);
    const c1 = this.getHexCornerCoord(center, 1);
    const c2 = this.getHexCornerCoord(center, 2);
    const c3 = this.getHexCornerCoord(center, 3);
    const c4 = this.getHexCornerCoord(center, 4);
    const c5 = this.getHexCornerCoord(center, 5);
    const ctx = canvasID.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.1;
    ctx.moveTo(c0.x, c0.y);
    ctx.lineTo(c1.x, c1.y);
    ctx.lineTo(c2.x, c2.y);
    ctx.lineTo(c3.x, c3.y);
    ctx.lineTo(c4.x, c4.y);
    ctx.lineTo(c5.x, c5.y);
    ctx.closePath();
    ctx.fill();
  }

  drawHexCoordinates(canvasID, center, h) {
    const ctx = canvasID.getContext('2d');
    ctx.fillText(h.q, center.x + 20, center.y);
    ctx.fillText(h.r, center.x - 3, center.y + 20);
    ctx.fillText(h.s, center.x - 12, center.y);
  }

  drawClickedHex(h) {
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    const {
      hexWidth, hexHeight, vertDist, horizDist,
    } = this.state.hexParameters;
    const { q, r, s } = this.Hex(h.q, h.r, h.s);
    const { x, y } = this.hexToPixel(this.Hex(q, r, s));
    const { playerPosition } = this.state;

    if ((x > hexWidth / 2 && x < canvasWidth - hexWidth / 2) && (y > hexHeight / 2 && y < canvasHeight - hexHeight / 2)) {
      this.drawHex(this.canvasCoordinates, this.Point(x, y), 'green', 2, 'red');
      this.drawHex(this.canvasCoordinates, this.Point(playerPosition.x, playerPosition.y), 'green', 2, 'red');
    }
  }

  getHexCornerCoord(center, i) {
    const angle_deg = 60 * i - 30;
    const angle_rad = Math.PI / 180 * angle_deg;
    const x = center.x + this.state.hexSize * Math.cos(angle_rad);
    const y = center.y + this.state.hexSize * Math.sin(angle_rad);
    return this.Point(x, y);
  }

  getHexParameters() {
    const hexHeight = this.state.hexSize * 2;
    const hexWidth = Math.sqrt(3) / 2 * hexHeight;
    const vertDist = hexHeight * 3 / 4;
    const horizDist = hexWidth;
    return {
      hexWidth, hexHeight, vertDist, horizDist,
    };
  }

  getCanvasPosition(canvasID) {
    const rect = canvasID.getBoundingClientRect();
    this.setState({
      canvasPosition: {
        left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom,
      },
    });
  }

  Point(x, y) {
    return { x, y };
  }

  handleMouseMove(e) {
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    const {
      hexWidth, hexHeight, vertDist, horizDist,
    } = this.state.hexParameters;
    const {
      left, right, top, bottom,
    } = this.state.canvasPosition;
    const offsetX = e.pageX - left;
    const offsetY = e.pageY - top;
    const { q, r, s } = this.cubeRound(this.pixelToHex(this.Point(offsetX, offsetY)));
    const { x, y } = this.hexToPixel(this.Hex(q, r, s));
    if ((x > hexWidth / 2 && x < canvasWidth - hexWidth / 2) && (y > hexHeight / 2 && y < canvasHeight - hexHeight / 2)) {
      this.setState({
        currentHex: {
          q, r, s, x, y,
        },
      });
    }
  }

  drawNeighbors(h) {
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    const {
      hexWidth, hexHeight, vertDist, horizDist,
    } = this.state.hexParameters;
    for (let i = 0; i <= 5; i++) {
      const { q, r, s } = this.getCubeNeighbor(this.Hex(h.q, h.r, h.s), i);
      const { x, y } = this.hexToPixel(this.Hex(q, r, s));
      if ((x > hexWidth / 2 && x < canvasWidth - hexWidth / 2) && (y > hexHeight / 2 && y < canvasHeight - hexHeight / 2)) {
        this.drawHex(this.canvasCoordinates, this.Point(x, y), 'green', 2, 'yellowgreen');
      }
    }
  }

  ConectarHex = async (q, r, s) => {
    const response = await axios.post(`${SERVER_URL}/tableros/${this.state.tablero.id}`, {
      Q: q,
      R: r,
      S: s,
    });
    if (response.data.objeto) {
      if (response.data.objeto.tipo === 10) {
        alert('Encontraste la RATA VOLADORA');
        console.log('Encontraste la RATA VOLADORA');
      } else {
        alert('pisaste un objeto!');
        console.log('pisaste un objeto!');
      }
    } else {
      alert('No hay ningún objeto :(');
      console.log('No hay ningún objeto :(');
    }
  };

  ObtenerRata = async () => {
    const response = await axios.post(`${SERVER_URL}/tableros/${this.state.tablero.data.id}`, {

    });
  };

  handleClick() {
    const Cq = this.state.currentHex.q;
    const Cr = this.state.currentHex.r;
    const Cs = this.state.currentHex.s;
    const ide = { Cq, Cr, Cs };
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    const {
      hexWidth, hexHeight, vertDist, horizDist,
    } = this.state.hexParameters;
    let NeighborBoolean = true;
    let Boolean = true;
    const ClickedHex = this.Hex(Cq, Cr, Cs);
    const { playerPosition } = this.state;

    const { Base } = this.state;
    // if(this.state.clickedHexs.includes(this.state.currentHex)){
    this.state.clickedid.map((element) => {
      const PreviousHex = this.Hex(element.q, element.r, element.s);
      if (PreviousHex.q === ClickedHex.q && PreviousHex.r === ClickedHex.r && PreviousHex.s === ClickedHex.s) {
        console.log('No puedes volver a este hexágono');
        Boolean = false;
      }
    });
    for (let i = 0; i <= 5; i++) {
      const { q, r, s } = this.getCubeNeighbor(this.Hex(playerPosition.q, playerPosition.r, playerPosition.s), i);

      if (Cq === q && Cr === r && Cs === s) {
        NeighborBoolean = false;
      }
    }

    if (Boolean === true && NeighborBoolean === false) {
      this.setState({
        playerPosition: this.state.currentHex,
        clickedHexs: this.state.clickedHexs.concat(this.state.currentHex),
        clickedid: this.state.clickedid.concat({ q: this.state.currentHex.q, r: this.state.currentHex.r, s: this.state.currentHex.s }),
      });
      this.ConectarHex(this.state.currentHex.q, this.state.currentHex.r, this.state.currentHex.s);
      this.drawClickedHex(this.state.currentHex);
    }
  }

  render() {
    return (
      <div>
        <canvas className="canvasHex" ref={(canvasHex) => this.canvasHex = canvasHex}> </canvas>
        <canvas className="canvasBackground" onMouseMove={this.handleMouseMove} onClick={this.handleClick} ref={(canvasCoordinates) => this.canvasCoordinates = canvasCoordinates}> </canvas>

      </div>
    );
  }
}
