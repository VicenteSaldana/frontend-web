function validateRegistro() {
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
}
function validateLogin() {
  const nombre = document.getElementById('loginusuario').value;
  if (nombre === '') {
    console.log('hola\n');
    alert('Tu nombre de usuario no puede estar vacío.');
    return false;
  }
  const passwd = document.getElementById('loginpwd').value;
  if (passwd.length < 6) {
    alert('La clave debe ser de almenos 6 caracteres.');
    return false;
  }
}
