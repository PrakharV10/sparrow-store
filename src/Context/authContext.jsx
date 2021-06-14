import { createContext } from 'react';
import React, { useContext, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router';
import { authReducer, initialAuthState } from '../Reducer/authReducer';

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
	const navigate = useNavigate();

	function previousVersionUserCleanup() {
		localStorage.removeItem('Login');
		alert('Welcome to Phoenix v2. Signup to continue.');
		navigate('/signup');
	}

	useEffect(() => {
		const localStorageMemory = JSON.parse(localStorage.getItem('Login'));
		if (localStorageMemory?.isUserLoggedIn) {
			if (localStorageMemory.token) {
				authDispatch({
					type: 'LOGIN_BY_LOCAL_STORAGE',
					payload: { user: localStorageMemory },
				});
			} else {
				previousVersionUserCleanup();
			}
		}
	}, []);

	return (
		<AuthContext.Provider value={{ authState, authDispatch }}>{children}</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}
