import React from 'react';
import { createRoot } from 'react-dom/client'; // Importar createRoot desde react-dom/client
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap
import GlobalStyles from './Styles/GlobalStyles';
import { VideoProvider } from './Contexts/VideoContext';

const root = createRoot(document.getElementById('root')); // Crear un root

root.render(
  <BrowserRouter>
    <GlobalStyles />
    <VideoProvider>
      <App />
    </VideoProvider>
  </BrowserRouter>
);