import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './estilos/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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
        navigate('/'); // Redirige a la página principal después de un inicio de sesión exitoso
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
        <h2 className="text-center mb-4">Inicio de Sesión</h2>
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
          <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
          <p className="text-center mt-3">
            ¿No tienes una cuenta?{' '}
            <span
              className="register-link"
              onClick={() => navigate('/register')}
              style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }}
            >
              Regístrate
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
