function Comojugar () {

    return     <div className="texto">
    <h3>Bienvenid@ a Rata Voladora!</h3>
    <p>
        En este juego tu objetivo es explorar el laberinto de la rata, colectando objetos mágicos, hechizos, armas y diversión, con tal de encontrar la mística rata voladora!
        El tablero estará escondido antes de que lo explores, pero a medida que te acerques verás símbolos que te darán pistas sobre lo que puedes encontrar
        en las piezas que te rodean. En tu turno deberás decidir a cual de estas piezas moverte. 
    </p>
    <p>
        Pero no vas sol@! Te acompañan tus fieros guerreros. Tu ninja audaz, tu tanque imponente y tu mago sabio serán tus mejores amigos en esta travesía!
        Cuídalos, pues si su vida baja demasiado, serás enviad@ devuelta a tu base. 
    </p>
    <p>
        Ármate hasta los dientes y ve en busca de otros jugadores, para entrar en un fiero combate. 
        Recuerda que tus armas son mágicas. Busca utilizar sus elementos a tu favor, un arma de fuego le hará más daño a una armadura de hielo, y menos a una de agua.
    </p>
    <p>
        Si encuentras la rata, apresurate en volver y ten cuidado! Todos los otros jugadores verán tu posición en el mapa, y buscarán quitarte a tu bella rata.
    </p>
    <p>    
        Mucha suerte en tu aventura, y
        que la rata te acompañe. 
    </p>
    <button className = "button" id="volverdelogin" type="button"  onClick={(e) => {
      e.preventDefault();
      window.location.href='/'; //https://stackoverflow.com/questions/41080481/in-reactjs-how-to-invoke-link-click-via-button-press
      }}>Volver</button>
</div>

}
export default Comojugar;