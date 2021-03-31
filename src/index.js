import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider, CurrProdProvider, RouteProvider, ToastProvider } from './Context/Cart-Context';
import mockServer from './api/mock.server';

mockServer();

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <RouteProvider>
        <CurrProdProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </CurrProdProvider>
      </RouteProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
