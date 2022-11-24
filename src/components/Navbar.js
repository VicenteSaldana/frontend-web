import useCookieAuth from '../hooks/useCookieAuth';

function Navbar() {
  const { currentUser } = useCookieAuth();
  return (
    <nav className="nav-bar">

      {(currentUser) ? (
        <ul>
          <li><a className="active" href="/home">Home</a></li>
          <li><a href="/comojugar">Como Jugar</a></li>
          <li><a href="/conocenos">Conócenos!</a></li>
          <li>
            <a href="/preguntas">Preguntas Frecuentes</a>
            {' '}
          </li>
          <li><a href="/acercade">Acerca de...</a></li>
          <li><a href="/tablero">Tablero</a></li>
          <li><a href="/logout">Cerrar Sesión</a></li>
        </ul>
      ) : (
        <ul>
          <li><a className="active" href="/home">Home</a></li>
          <li><a href="/registro">Regístrate</a></li>
          <li><a href="/login">Inicia sesión</a></li>
          <li><a href="/comojugar">Como Jugar</a></li>
          <li><a href="/conocenos">Conócenos!</a></li>
          <li>
            <a href="/preguntas">Preguntas Frecuentes</a>
            {' '}
          </li>
          <li><a href="/acercade">Acerca de...</a></li>

        </ul>

      )}

    </nav>
  );
}
export default Navbar;
