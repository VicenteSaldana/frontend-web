import axios from 'axios';
import BlueButton from './BlueButton';
import Tablero from './Tablero';
import Vida from './ProgressBar';
import Objetos from './Objetos';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Game() {
  const playerId = 0;
  const objetos = [];
  const vidaTanque = 100;
  const vidaMago = 100;
  const vidaHealer = 100;

  return (
    <div className="ambos">
      <div className="espacioTablero">
        <Tablero />
      </div>
      <div className="Vidas">
        <Vida />
        <Objetos />
      </div>

    </div>
  );
}

export default Game;
