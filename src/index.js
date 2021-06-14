import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LoaderProvider, Puff } from '@agney/react-loading';
import { CartProvider, AuthProvider, IsLoadingProvider } from './Context';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<IsLoadingProvider>
				<LoaderProvider indicator={<Puff width="100" />}>
					<AuthProvider>
						<CartProvider>
							<App />
						</CartProvider>
					</AuthProvider>
				</LoaderProvider>
			</IsLoadingProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
