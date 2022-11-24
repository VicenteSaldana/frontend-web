import axios from 'axios';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Registro() {
  const validarRegistro = () => {
    const nombre = document.getElementById('registrousuario').value;
    if (nombre === '') {
      alert('Tu nombre de usuario no puede estar vacío.');
      return false;
    }
    const re = /^([\da-z_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
    if (!re.exec(document.getElementById('registrocorreo').value)) {
      alert('El correo no es válido.');
      return false;
    }
    const passwd = document.getElementById('registropwd').value;
    if (passwd.length < 6) {
      alert('La clave debe ser de almenos 6 caracteres.');
      return false;
    }

    axios.post(`${SERVER_URL}/auth/signup`, {
      username: document.getElementById('registrousuario').value,
      email: document.getElementById('registrocorreo').value,
      password: document.getElementById('registropwd').value,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (validarRegistro) {
    const playerId = async () => {
      const url = `${SERVER_URL}/auth/signup`;
      await axios.post(url, {
        username: document.getElementById('registrousuario').value,
        email: document.getElementById('registrocorreo').value,
        password: document.getElementById('registropwd').value,
      }).then((response) => response.data);
    };
  }

  function postPlayer() {

  }

  return (
    <form name="registrar">
      <div className="flex-container-form">
        <div className="box">
          <label htmlFor="registrousuario">Nombre de usuario:</label>
          <input type="input" id="registrousuario" />
        </div>
        <div className="box">
          <label htmlFor="registrocorreo">Dirección de correo:</label>
          <input type="input" id="registrocorreo" />
        </div>
        <div className="box">
          <label htmlFor="registropwd">Contraseña:</label>
          <input type="password" id="registropwd" name="registropwd" />
        </div>
        <div className="flex-item-button">
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
          <button className="button" id="botonregistro" type="button" onClick={validarRegistro}> Registrarme  </button>
        </div>
      </div>
    </form>
  );
}
export default Registro;
