function Partidas() {
  return (
    <div>
      <button
        className="button"
        id="botonpartida"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = '/waitingroom'; // https://stackoverflow.com/questions/41080481/in-reactjs-how-to-invoke-link-click-via-button-press
        }}
      >
        Unirse a Partida
      </button>
    </div>
  );
}

export default Partidas;
