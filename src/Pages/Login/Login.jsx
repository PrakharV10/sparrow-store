import React, { useEffect, useState } from 'react';
import './Login.css';
import { BreadCrumb } from '../../Components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context';
import { serverCallHandler } from '../../utils/serverCallHandler';
import { SERVER_URL } from '../../utils/api';

function Login() {
	const {
		authState: { isUserLoggedIn },
		authDispatch,
	} = useAuth();
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const navigate = useNavigate();
	const { state } = useLocation();

	const [localInput, setLocalInput] = useState({
		email: '',
		password: '',
	});

	function loginSubmitHandler(e) {
		e.preventDefault();
		setLoading(true);
		serverAuth();
	}

	async function serverAuth() {
		const { response } = await serverCallHandler('POST', `${SERVER_URL}/login`, {
			email: localInput.email,
			password: localInput.password,
		});
		if (response.success) {
			setErrorMessage('');
			setLoading(false);
			authDispatch({
				type: 'SAVE_LOGIN_DETAILS',
				payload: { user: response.data, token: response.token },
			});
		} else {
			setErrorMessage(response.message);
		}
	}

	useEffect(() => {
		isUserLoggedIn && navigate(state?.from ? state.from : '/');
	}, [isUserLoggedIn]);

	return (
		<div className='login-page common-wrapper'>
			<BreadCrumb />
			<div className='login-modal-bg'>
				<form onSubmit={(e) => loginSubmitHandler(e)} className='login-modal'>
					<div className='login-head'>LOGIN</div>

					<div className='login-subhead'>Please enter your email and password.</div>

					{errorMessage && (
						<div className='alert error'>
							<svg width='1em' height='1em' viewBox='0 0 24 24'>
								<path
									d='M13 13h-2V7h2m0 10h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z'
									fill='currentColor'
								></path>
							</svg>
							{errorMessage}
						</div>
					)}

					<div className='login-fields'>
						<input
							type='email'
							placeholder='Email'
							name='email'
							value={localInput.email}
							required
							onChange={(e) =>
								setLocalInput({ ...localInput, email: e.target.value })
							}
						/>
						<input
							type='password'
							placeholder='Password'
							value={localInput.password}
							onChange={(e) =>
								setLocalInput({ ...localInput, password: e.target.value })
							}
							required
						/>
					</div>
					<div className='action-button'>
						<button className='btn btn-black' type='submit'>
							{loading ? `LOGGIN IN` : `LOGIN`}
						</button>
					</div>
					<div className='sub-text'>
						Don't have an account?{' '}
						<Link to='/signup'>
							<span>Sign up!</span>
						</Link>
					</div>
					<div
						onClick={() =>
							setLocalInput({ email: 'raven@gmail.com', password: '123456' })
						}
						className='sub-text'
					>
						Use Guest Credentials
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
