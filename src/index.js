import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LoaderProvider, Puff } from '@agney/react-loading';
import { CartProvider } from './Context/context';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <AuthProvider>
        <CartProvider>
          <LoaderProvider indicator={<Puff width="100" />}>
            <App />
          </LoaderProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
