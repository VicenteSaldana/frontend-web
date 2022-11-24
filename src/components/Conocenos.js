function Conocenos() {
  return (
    <div className="flex-container-nosotros">
      <div className="box">
        ¡Bienvenid@! Aquí conocerás un poco más sobre los creadores de este juego.
      </div>
      <div className="box">
        Somos tres estudiantes que actualmente estamos cursando el ramo Tecnologías y Aplicaciones Web con el profesor Hernán Cabrera y este es
        el resultado de lo que vamos haciendo en nuestro proyecto, el cual es un juego web llamado RATÓN VOLADOR.
      </div>
      <h2>
        Integrantes:
      </h2>
      <div className="flex-container-integrantes">
        <div className="box">Rafael Elberg:</div>
        <div className="flex-container-integrante">
          <div className="flex-item-picture"><img src={require('../imgs/miguelito.jpeg')} alt="miguelito" /></div>
          <div className="box">
            holaa soy Rafael, Tengo 22 años y soy de 5 año de ingeniería. Me gusta el manga, el anime
            y los videojuegos y espero poder trabajar en investigación y que algo tenga mi nombre. Me gusta tocar guitarra y banjo y me encantan los animales
            y José Antonio tiene razón esto parece tinder. Saludos      (っ´ω`c)♡
          </div>
        </div>
        <div className="box">José Antonio Morales:</div>
        <div className="flex-container-integrante">
          <div className="flex-item-picture"><img src={require('../imgs/miguelito.jpeg')} alt="miguelito" /></div>
          <div className="box">
            Hola! soy José y tengo 22 años, actualmente me encuentro cursando 4°
            año de ingeniería y me interesa el área de computación. Espero poder salir lo más pronto posible de la universidad y
            poder desarrollarme como programador en alguna parte en la que pueda desarrollarme como persona. Me gusta hacer deporte y
            conocer lugares nuevos. (Esto parece tinder la verdad.)
          </div>
        </div>
        <div className="box">Vicente Saldaña:</div>
        <div className="flex-container-integrante">
          <div className="flex-item-picture"><img src={require('../imgs/miguelito.jpeg')} alt="miguelito" /></div>
          <div className="box">
            Holaa soy Vicente, tengo 20 años y voy en mi tercer año de ingeniería.
            Mi plan de vida es salir de la carrera, encontrar trabajo en un lugar que no me consuma la vida y seguir haciendo lo que más
            me gusta que es el baile y lo relacionado a la danza.
          </div>
        </div>
      </div>
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
export default Conocenos;
