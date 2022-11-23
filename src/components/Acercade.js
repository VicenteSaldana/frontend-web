
function Acercade (){
    return     <div>
    <ul className="about">
        <li> 
            <h3>¡Bienvenid@! Esta sección es para explicar qué es esto.</h3>
        </li>
        <li> Esta es la página web de "Ratón Volador", un juego diseñado para que tú y tus amigos puedan 
            compartir horad de risas y diversión.
        <dd><p> Ratas voladoras es un juego de tipo aventura por turnos para un total de 2 a 4
            jugadores. El objetivo del juego es encontrar la mística rata voladora. En cada turno los
            jugadores saltan a una celda adyacente a la celda en la que están, pudiendo
            encontrarse con obstáculos, enemigos, objetos que los pueden ayudar (armas, vida,
            armadura, hechizos), u otros jugadores. Si la vida de algún jugador cae a 0, ya sea por
            enemigos, obstáculos u otro jugador, este es enviado devuelta a su celda de inicio. Cada
            jugador controla tres personajes: Un ninja de club penguin, que pelea con espadas, un
            tanque que recibe daño, y un healer que recupera vida usando energía. Existen 2 tipos
            de hechizos, los comunes que son repuestas cada vez que un jugador las toma y las
            hechizos especiales que solo el primer jugador que las encuentra se las puede quedar.
            Para ganar se debe llevar a la rata voladora devuelta a la celda de inicio, pero OJO!
            Cuando tu tienes la rata voladora, eres visible en el mapa de todos los demás jugadores.
            Si pierdes un enfrentamiento teniendo la rata voladora, esta se queda en la celda donde
            moriste para que cualquiera la pueda tomar.</p></dd></li>
        <li> Actualmente nos encontramos en la Beta 1.0</li>
    </ul>
    <button className = "button" id="volverdelogin" type="button"  onClick={(e) => {
      e.preventDefault();
      window.location.href='/'; //https://stackoverflow.com/questions/41080481/in-reactjs-how-to-invoke-link-click-via-button-press
      }}>Volver</button>


</div>
}
export default Acercade;