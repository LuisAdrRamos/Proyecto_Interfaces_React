import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './estilos/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [correo, setCorreo] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (correo === '' || username === '' || password === '') {
      alert('Llenar todos los campos es obligatorio');
    } else {
      try {
        const response = await fetch('http://localhost:5000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            correo,
            username,
            password,
          }),
        });

        const data = await response.json();

        if (data.success) {
          alert('Registro exitoso');
          navigate('/login'); // Redirige al usuario al login después del registro exitoso
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Hubo un problema con la solicitud. Inténtalo nuevamente.');
      }
    }
  };

  return (
    <div className='login-body'>
      <div className="login-wrapper">
        <h2 className="text-center mb-4">Registro</h2>

        <form id="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="regEmail">Correo Electrónico:</label>
            <input
              type="email"
              className="form-control"
              id="regEmail"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="regUsername">Usuario:</label>
            <input
              type="text"
              className="form-control"
              id="regUsername"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="regPassword">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              id="regPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Registrarse</button>
          <p className="text-center mt-3">
            ¿Ya tienes una cuenta?{' '}
            <span
              className="login-link"
              onClick={() => navigate('/login')}
              style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }}
            >
              Inicia Sesión
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
