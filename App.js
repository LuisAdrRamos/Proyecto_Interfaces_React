import React, { useState, createContext, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './estilos/App.css';
import Header from './cliente/src/components/Header';
import NavBar from './cliente/src/components/NavBar';
import Carousel from './cliente/src/components/Carousel';
import Card from './cliente/src/components/Card';
import Map from './cliente/src/components/Map';
import Footer from './cliente/src/components/Footer';
import Login from './cliente/src/login';
import Register from './cliente/src/register';
import Perfil from './cliente/src/perfil';
import Carrito from './cliente/src/carrito';
import TecladosOficina from './cliente/src/tecladosOficina';
import TecladosMecanicos from './cliente/src/tecladosMecanicos';
import TecladosCustom from './cliente/src/tecladosCustom';
import { CartProvider } from './cliente/src/CartContext';
export const UserContext = createContext(null);
export const useUser = () => useContext(UserContext);

const AppContent = () => {
  const location = useLocation();
  const noHeaderFooterRoutes = ['/login', '/register'];

  return (
    <div>
      {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}
      {!noHeaderFooterRoutes.includes(location.pathname) && <NavBar />}
      
      <Routes>
        <Route path="/" element={
          <div>
            <Carousel />
            <div className="container mt-4">
              <div className="row">
                <Card
                  imgSrc="https://www.info-computer.com/img/cms/Blog%20Camila%20Sa/Teclado%20para%20Escribir%20o%20Trabajar%20en%20Oficina.jpg"
                  title="Teclados de Oficina"
                  text="Mejora tu productividad con nuestros teclados de oficina ergonómicos y duraderos."
                  link='/tecladosOficina'
                />
                <Card
                  imgSrc="https://www.muycomputerpro.com/wp-content/uploads/2021/02/logitech_g_pro_x_mechanical_gaming_keyboard.jpg"
                  title="Teclados Mecanicos"
                  text="Descubre nuestros teclados mecánicos de alta calidad. Perfectos para gamers y profesionales."
                  link='/tecladosMecanicos'
                />
                <Card
                  imgSrc="https://www.profesionalreview.com/wp-content/uploads/2022/03/keychron-q1.jpg"
                  title="Teclados Custom"
                  text="Lleva tu experiencia de escritura y gaming al siguiente nivel con nuestros teclados Custom."
                  link='/tecladosCustom'
                />
              </div>
            </div>
            <h3>Ubicación de la tienda</h3>
            <div className="conocenos">
              <section>
                <Map />
              </section>
            </div>
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path='/tecladosOficina' element={<TecladosOficina />}/>
        <Route path='/tecladosMecanicos' element={<TecladosMecanicos/>}/>
        <Route path='/tecladosCustom' element={<TecladosCustom/>}/>
      </Routes>

      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};

const AppWrapper = () => {
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const storedUserID = localStorage.getItem('userID');
    if (storedUserID) {
      setUserID(storedUserID);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userID, setUserID }}>
      <CartProvider>
        <Router>
          <AppContent />
        </Router>
      </CartProvider>
    </UserContext.Provider>
  );
};

export default AppWrapper;
