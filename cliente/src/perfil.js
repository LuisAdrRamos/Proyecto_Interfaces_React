import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './App';

const Perfil = () => {
    const { userID } = useUser();
    const [userData, setUserData] = useState({
      correo: '',
      user: '',
      contraseña: '',
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            if (!userID) {
                alert("No se encontró el ID del usuario. Inicia sesión nuevamente.");
                navigate("/login");
                return;
            }
    
            try {
                const response = await fetch(`http://localhost:5000/perfil/${userID}`);
                const result = await response.json();
                setUserData(result);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [userID, navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`http://localhost:5000/perfil/${userID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                alert('Datos actualizados correctamente');
            } else {
                alert('Error al actualizar los datos');
            }
        } catch (error) {
            console.error('Error updating user data:', error);
            alert('Error al actualizar los datos');
        }
    };

    const handleDeleteAccount = async () => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas borrar tu cuenta? Esta acción es irreversible.");
        
        if (confirmDelete) {
            try {
                const response = await fetch(`http://localhost:5000/perfil/${userID}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    alert('Cuenta borrada correctamente');
                    localStorage.removeItem("userID");
                    navigate('./app');
                } else {
                    alert('Error al borrar la cuenta');
                }
            } catch (error) {
                console.error('Error deleting account:', error);
                alert('Error al borrar la cuenta');
            }
        }
    };

    return (
        <div className='container-fluid vw-100 vh-100'>
          <div className='col-md-8 col-lg-6 mx-auto'>
            <div className='card'>
              <div className='card-header bg-custom text-white'>
                <h4 className='mb-0'>Perfil de Usuario</h4>
              </div>
              <div className='card-body'>
                <form onSubmit={handleSubmit}>
                  <div className='mb-3'>
                    <label htmlFor='userId' className='form-label'>ID de Usuario</label>
                    <input
                      type='text'
                      name='userId'
                      id='userId'
                      className='form-control'
                      value={userID}
                      readOnly
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='correo' className='form-label'>Correo Electrónico</label>
                    <input
                      type='email'
                      name='correo'
                      id='correo'
                      className='form-control'
                      required
                      value={userData.correo}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='user' className='form-label'>Nombre de Usuario</label>
                    <input
                      type='text'
                      name='user'
                      id='user'
                      className='form-control'
                      required
                      value={userData.user}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='contraseña' className='form-label'>Contraseña</label>
                    <input
                      type='password'
                      name='contraseña'
                      id='contraseña'
                      className='form-control'
                      required
                      value={userData.contraseña}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='d-flex justify-content-between'>
                    <button type='submit' className='btn btn-success'>Actualizar Datos</button>
                    <button type='button' className='btn btn-secondary' onClick={handleDeleteAccount}>Borrar Cuenta</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Perfil;
