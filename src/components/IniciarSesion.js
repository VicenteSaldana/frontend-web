import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
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
  return (
    <div>

      {(handleUserLogin) ? (

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

      ) : (

        <Navigate replace to="/home" />
      )}

    </div>
  );
}
