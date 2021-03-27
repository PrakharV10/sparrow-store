import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider, CurrProdProvider, RouteProvider, ToastProvider } from './Context/Cart-Context';

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
