const LOGIN_BY_LOCAL_STORAGE = 'LOGIN_BY_LOCAL_STORAGE';
const SAVE_USER_DETAILS_FROM_SERVER = 'SAVE_USER_DETAILS_FROM_SERVER';
const SAVE_LOGIN_DETAILS = 'SAVE_LOGIN_DETAILS';
const SAVE_SIGNUP_DETAILS = 'SAVE_SIGNUP_DETAILS';
const LOG_OUT_HANDLER = 'LOG_OUT_HANDLER';

export function authReducer(state, { type, payload }) {
	switch (type) {
		case LOGIN_BY_LOCAL_STORAGE:
			return {
				...state,
				isUserLoggedIn: true,
				authToken: payload.user.token,
				username: payload.user.username,
				email: payload.user.email,
			};

		case SAVE_USER_DETAILS_FROM_SERVER:
			return {
				...state,
				email: payload.email,
				username: payload.username,
			};

		case SAVE_LOGIN_DETAILS:
			localStorage.setItem(
				'Login',
				JSON.stringify({ isUserLoggedIn: true, token: payload.token })
			);
			return {
				...state,
				isUserLoggedIn: true,
				authToken: payload.token,
				username: payload.user.username,
				email: payload.user.email,
			};

		case SAVE_SIGNUP_DETAILS:
			localStorage.setItem(
				'Login',
				JSON.stringify({ isUserLoggedIn: true, token: payload.token })
			);
			return {
				...state,
				isUserLoggedIn: true,
				authToken: payload.token,
				username: payload.user.username,
				email: payload.user.email,
			};

		case LOG_OUT_HANDLER:
			localStorage.removeItem('Login');
			return {
				isUserLoggedIn: false,
				authToken: '',
				username: '',
				email: '',
			};

		default:
			return state;
	}
}

export const initialAuthState = {
	isUserLoggedIn: false,
	authToken: '',
	username: null,
	email: '',
};
