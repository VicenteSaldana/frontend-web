function Preguntas() {
  return (
    <div>
      <ul className="preguntas">
        <h3>
          ¡Bienvenid@! En esta sección responderemos algunas de las preguntas más frecuentes acerca de la aplicación.
        </h3>
        <li>
          ¿Qué es esto?
          <dd>
            <p>
              Esta es la página web de "Ratón Volador", un juego diseñado para que tú y tus amigos puedan
              compartir horas de risas y diversión.
            </p>
          </dd>
        </li>
        <li>
          ¿Cómo me registro?
          <dd>
            <p>
              Para registrarte basta con acceder a la sección de "Regístrate" en la barra de navegación, ya ahí debes
              escribir el nombre de usuario que quieras tener y una contraseña. Al clickear el botón de registro tu cuenta
              estará creada y lista para que puedas acceder y disfrutar de Ratón Volador con tus amigos.
            </p>
          </dd>
        </li>
      </ul>

      <button
        className="button"
        id="volverdelogin"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = '/'; // https://stackoverflow.com/questions/41080481/in-reactjs-how-to-invoke-link-click-via-button-press
        }}
      >
        Volver
      </button>
    </div>
  );
}
export default Preguntas;
