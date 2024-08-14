import React, { useState } from 'react';
import './estilos/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username === '' || password === '') {
      alert('Llenar todos los campos es obligatorio');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: username, pass: password }),
      });

      const data = await response.json();

      if (data.success) {
        window.location.href = '/';
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Hubo un problema con la solicitud. Inténtalo nuevamente.');
    }
  };

  return (
    <div className="login-body">
      <div className="login-wrapper">
      <h2 className="text-center mb-4">Inicio de Sesion</h2>
        <form onSubmit={handleSubmit} id="login-form">
          <div className="login-form-group">
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login-button">
            <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
          </div>
          <p class="text-center mt-3">¿No tienes una cuenta? <a href="register.html" id="registerLink">Registrate</a></p>
        </form>
      </div>
    </div>
  );
  
};

export default Login;
