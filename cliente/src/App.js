import React from 'react';
import './estilos/App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Card from './components/Card';
import Map from './components/Map';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './login';

library.add(faSignOutAlt, faHome, faSearch);

const AppContent = () => {
  const location = useLocation();

  // Condición para mostrar u ocultar Header, NavBar y Footer
  const shouldShowHeaderAndFooter = location.pathname !== '/login';

  return (
    <>
      {shouldShowHeaderAndFooter && <Header />}
      {shouldShowHeaderAndFooter && <NavBar />}
      <Routes>
        <Route 
          path="/" 
          element={
            <div>
              <Carousel />
              <div className="container mt-4">
                <div className="row">
                  <Card
                    imgSrc="https://www.info-computer.com/img/cms/Blog%20Camila%20Sa/Teclado%20para%20Escribir%20o%20Trabajar%20en%20Oficina.jpg"
                    title="Teclados de Oficina"
                    text="Mejora tu productividad con nuestros teclados de oficina ergonómicos y duraderos. Diseñados para ofrecer una experiencia de escritura cómoda y precisa, nuestros teclados cuentan con teclas de bajo perfil y respuesta rápida, perfectos para largas jornadas de trabajo."
                  />
                  <Card
                    imgSrc="https://www.muycomputerpro.com/wp-content/uploads/2021/02/logitech_g_pro_x_mechanical_gaming_keyboard.jpg"
                    title="Teclados Mecanicos"
                    text="Descubre nuestros teclados mecánicos de alta calidad. Perfectos para gamers y profesionales, estos teclados ofrecen una precisión y durabilidad incomparables. Cada tecla está equipada con interruptores mecánicos individuales, proporcionando una respuesta táctil y auditiva excepcional."
                  />
                  <Card
                    imgSrc="https://www.muycomputerpro.com/wp-content/uploads/2021/02/logitech_g_pro_x_mechanical_gaming_keyboard.jpg"
                    title="Teclados Custom"
                    text="Lleva tu experiencia de escritura y gaming al siguiente nivel con nuestros teclados Custom. Diseñados para los entusiastas que buscan la perfección, estos teclados ofrecen una personalización completa, desde los interruptores y las keycaps, hasta el case y la iluminacion RGB."
                  />
                </div>
              </div>
              <h3>Ubicacion de la tienda</h3>
              <div className="conocenos">
                <section>
                  <Map />
                </section>
              </div>
            </div>
          } 
        />
        <Route path="/login" element={<Login />} />
      </Routes>
      {shouldShowHeaderAndFooter && <Footer />}
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;