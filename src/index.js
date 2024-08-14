import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSignOutAlt, faHome, faSearch);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
