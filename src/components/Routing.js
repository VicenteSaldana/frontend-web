import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acercade from './Acercade';
import Comojugar from './Comojugar';
import Conocenos from './Conocenos';
import IniciarSesion from './IniciarSesion';
import Preguntas from './Preguntas';
import Registro from './Registro';
import Game from './Game';
import Home from './Home';
import CookieAuthProvider from '../contexts/cookieAuth';
import TokenAuthProvider from '../contexts/tokenAuth';
import LogOut from './LogOut';
import Partidas from './Partidas';
import WaitingRoom from './WaitingRoom';

function Routing() {
  return (
    <BrowserRouter>
      <CookieAuthProvider>
        <TokenAuthProvider>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />

            <Route path="/acercade" element={<Acercade />} />
            <Route path="/comojugar" element={<Comojugar />} />
            <Route path="/conocenos" element={<Conocenos />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/preguntas" element={<Preguntas />} />
            <Route path="/login" element={<IniciarSesion />} />
            <Route path="/tablero" element={<Game />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/partidas" element={<Partidas />} />
            <Route path="/waitingroom" element={<WaitingRoom />} />

          </Routes>
        </TokenAuthProvider>
      </CookieAuthProvider>
    </BrowserRouter>
  );
}
export default Routing;
