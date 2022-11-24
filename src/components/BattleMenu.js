import '../styles/styles.css';

function Batalla() {
  return (
    <div className="batalla">
      <div className="texto-batalla">
        <div className="pregunta">

          ¿Qué harás a continuación?
        </div>
        <button className="btn btn-outline-primary btn-lg" id="botonbatalla"> Atacar</button>
        <button className="btn btn-outline-success btn-lg" id="botonbatalla"> Defender</button>
        <button className="btn btn-outline-warning btn-lg" id="botonbatalla"> Objeto</button>
        <button className="btn btn-outline-danger btn-lg" id="botonbatalla"> Rendirse</button>

      </div>
    </div>

  );
}
export default Batalla;
