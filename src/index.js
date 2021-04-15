import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider, ToastProvider } from './Context/context';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <AuthProvider>
        <CartProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
