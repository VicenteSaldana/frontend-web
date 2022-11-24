import axios from 'axios';
import BlueButton from './BlueButton';
import Tablero from './Tablero';
import Vida from './ProgressBar';
import Objetos from './Objetos';
import Batalla from './BattleMenu';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Game() {
  /*     const playerId = 0;
    const objetos = [];
    const vidaTanque = 100
    const vidaMago = 100
    const vidaHealer = 100 */
  const batalla = false;

  return (
    <>

      <div className="ambos">
        <div className="espacioTablero">
          <Tablero />
        </div>
        <div className="Vidas">
          <Vida />
          <Objetos />
        </div>

      </div>
      {(batalla) ? (
        <Batalla />
      )
        : (
          <p />
        )}

    </>
  );
}

export default Game;
