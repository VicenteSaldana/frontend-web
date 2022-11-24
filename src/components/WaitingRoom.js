import axios from 'axios';
import { SERVER_URL } from '../App';

function WaitingRoom() {
  const validar = async (e) => {
    const response = await axios.put(`${SERVER_URL}/jugadores/1`);
  };

  validar();

  const empezarpartida = async (e) => {
    const response = await axios.post(`${SERVER_URL}/jugadores/`);
    if (response.status === 200) {
      console.log('Aun no hay suficientes jugadores');
    } else if (response.status === 201) {
      return true;
    }
  };

  const cancelarpartida = async (e) => {
    const response = await axios.patch(`${SERVER_URL}/jugadores/0`);
  };

  return (
    <div>
      <div className="flex-container-nosotros">
        {' '}
        <div className="box">
          <h1>Esperando Jugadores</h1>
        </div>
        {' '}

      </div>

      <button
        className="button"
        id="botonpartida"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          if (empezarpartida()) { window.location.href = '/tablero'; } // https://stackoverflow.com/questions/41080481/in-reactjs-how-to-invoke-link-click-via-button-press
        }}
      >
        Empezar Partida
      </button>

      <button
        className="button"
        id="botonpartida"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          cancelarpartida();
          window.location.href = '/Partidas';
        }}
      >
        Cancelar busqueda
      </button>

    </div>

  );
}

export default WaitingRoom;
