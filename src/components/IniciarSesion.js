import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import useCookieAuth from '../hooks/useCookieAuth';
import { SERVER_URL } from '../App';
import useTokenAuth from '../hooks/useTokenAuth';

export default function IniciarSesion() {
  const [mail, setMail] = useState('');
  const [passwd, setPassword] = useState('');
  const navigate = useNavigate();
  const { handleUserLogin } = useCookieAuth();
  const { handleTokenChange } = useTokenAuth();

  const validateLogin = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${SERVER_URL}/auth/login`, {
      email: mail,
      password: passwd,
    });
    if (!response.data.error) {
      handleTokenChange(response.data.token, 'login');
      handleUserLogin();
      navigate(-1);
    } else {
      console.log(response.data.error);
    }
  };
  /*
        let nombre = document.getElementById('loginusuario').value;
        if (nombre === "") {
          alert("Tu nombre de usuario no puede estar vacío.");
          return false;
        }
        let passwd = document.getElementById('loginpwd').value;
        if (passwd.length < 6){
          alert("La clave debe ser de almenos 6 caracteres.");
          return false;
        }

      axios.get(`${SERVER_URL}/jugadores/find?username=${document.getElementById('loginusuario').value}&password='${document.getElementById('loginpwd').value}'`)
        .then (function (response) {
          console.log(response.data.hash_password)

            console.log("accediste correctamente");

          console.log(response.data)
        })
      }
    const playerId = async () =>{
        const url = `${SERVER_URL}/jugadores`;
        await axios.post(url).then((response) => {
          return response.data;
        });
    };
    console.log(playerId); */

  return (
    <form name="login" onSubmit={validateLogin}>
      <div className="flex-container-form">

        <div className="box">

          <label htmlFor="loginusuario">Mail:</label>
          <input
            type="input"
            id="loginusuario"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
          />
        </div>
        <div className="box">
          <label htmlFor="loginpwd">Contraseña:</label>
          <input
            type="password"
            id="loginpwd"
            name="loginpwd"
            value={passwd}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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

          <input id="submit-login" type="submit" value="Iniciar Sesión" className="Button" />

        </div>
      </div>
    </form>
  );
}

/*
const LoginFormik = withFormik({
  mapPropsToValues: (props) => {
    return {
      email: props.email || '',
      password: props.password || ''
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().required('Password is required')
  }),
  handleSubmit: (values) => {

    //const REST_API_URL = "YOUR_REST_API_URL";
    fetch(SERVER_URL, {
      method: 'post',
      body: JSON.stringify(values)
    }).then(response=> {
      if (response.ok) {
        return response.json();
      } else {
        // HANDLE ERROR
        throw new Error('Something went wrong');
      }
    }).then(data => {
      // HANDLE RESPONSE DATA
      console.log(data);
    }).catch((error) => {
      // HANDLE ERROR
      console.log(error);
    });
  }
})(IniciarSesion);

export default LoginFormik; */
