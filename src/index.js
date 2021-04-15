import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider, ToastProvider } from './Context/Cart-Context';
import mockServer from './api/mock.server';
import { BrowserRouter } from 'react-router-dom';

mockServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <CartProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
