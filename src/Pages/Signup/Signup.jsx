import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BreadCrumb } from '../../Components';
import { useAuth } from '../../Context';
import { SERVER_URL } from '../../utils/api';
import { serverCallHandler } from '../../utils/serverCallHandler';

function Signup() {
	const {
		authState: { isUserLoggedIn },
		authDispatch,
	} = useAuth();
	const navigate = useNavigate();
	const { state } = useLocation();

	const [errorMessage, setErrorMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const [localInput, setLocalInput] = useState({
		username: '',
		email: '',
		password: '',
	});

	async function serverCheckAndSave() {
		const { response } = await serverCallHandler('POST', `${SERVER_URL}/signup`, {
			username: localInput.username,
			password: localInput.password,
			email: localInput.email,
		});
		if (response.success) {
			setErrorMessage('');
			setLoading(false);
			authDispatch({
				type: 'SAVE_SIGNUP_DETAILS',
				payload: { user: response.data, token: response.token },
			});
		} else {
			setErrorMessage(response.message);
			setLoading(false);
		}
	}

	function passwordValidate(e) {
		let current = e.target.value;
		if (current.trim().length !== current.length)
			setErrorMessage('Space in Password not supported');
		else {
			setLocalInput({ ...localInput, password: current });
			setErrorMessage('');
		}
	}

	function signupHandleSubmit(e) {
		e.preventDefault();
		setLoading(true);
		serverCheckAndSave();
	}

	useEffect(() => {
		isUserLoggedIn && navigate(state?.from ? state.from : '/');
	}, [isUserLoggedIn]);

	return (
		<div className="login-page common-wrapper">
			<BreadCrumb />
			<div className="login-modal-bg">
				<form onSubmit={(e) => signupHandleSubmit(e)} className="login-modal">
					<div className="login-head">REGISTER</div>

					<div className="login-subhead">Please fill in the information below.</div>

					{errorMessage && (
						<div className="alert error">
							<svg width="1em" height="1em" viewBox="0 0 24 24">
								<path
									d="M13 13h-2V7h2m0 10h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z"
									fill="currentColor"
								></path>
							</svg>
							{errorMessage}
						</div>
					)}

					<div className="login-fields">
						<input
							placeholder="Name"
							type="text"
							name="username"
							value={localInput.username}
							onChange={(e) =>
								setLocalInput({ ...localInput, username: e.target.value })
							}
							required
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							value={localInput.name}
							onChange={(e) =>
								setLocalInput({ ...localInput, email: e.target.value })
							}
							required
						/>
						<input
							type="password"
							placeholder="Password"
							value={localInput.password}
							onChange={(e) => passwordValidate(e)}
							required
						/>
					</div>
					<div className="action-button">
						<button className="btn btn-black" type="submit">
							{loading ? `SIGNING IN` : `SIGN IN`}
						</button>
					</div>
					<div className="sub-text">
						Already have an account?{' '}
						<Link to="/login">
							<span>Log in!</span>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Signup;
