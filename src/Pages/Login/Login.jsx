import React, { useEffect, useState } from 'react'
import './Login.css'
import Pagination from '../../Components/Pagination/Pagination'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth, useCart } from '../../Context/context'

function Login() {

    const { authState: { isUserLoggedIn }, authDispatch } = useAuth();
    const { cartDispatch } = useCart();
    const navigate = useNavigate();
    const { state } = useLocation();

    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [localInput, setLocalInput] = useState({
        email: "",
        password: ""
    })

    function loginSubmitHandler(e) {
        e.preventDefault();
        setLoading(true)
        serverAuth();
    }

    async function serverAuth() {
        try {
            let { data: { success, user, message } } = await axios.post('https://Sparrow-Store.prakhar10v.repl.co/login', localInput)
            if (success) {
                setErrorMessage(message)
                setLoading(false)
                authDispatch({ type: "SAVE_LOGIN_SIGNUP_DETAILS", payload: user })
                cartDispatch({ type: "SAVE_USER_ON_LOGIN", payload: user })
            } else {
                setErrorMessage(message)
                setLoading(false);
            }
        } catch (err) {
            console.log(JSON.parse(err))
            setErrorMessage("Something went wrong")
            setLoading(false);
        }
    }

    useEffect(() => {
        isUserLoggedIn && navigate(state?.from ? state.from : "/")
    },[isUserLoggedIn])

    return (
        <div className="login-page common-wrapper">
            <Pagination />
            <div className="login-modal-bg">
                <form
                    onSubmit={e => loginSubmitHandler(e)}
                    className="login-modal"
                >
                    <div className="login-head">
                        LOGIN
                    </div>

                    <div className="login-subhead">
                        Please enter your email and password.
                    </div>

                    {errorMessage && <div className="alert error">
                        <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M13 13h-2V7h2m0 10h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z" fill="currentColor"></path></svg>
                        {errorMessage}
                    </div>}

                    <div className="login-fields">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value = {localInput.email}
                            required
                            onChange = {e => setLocalInput({...localInput, email : e.target.value})}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value = {localInput.password}
                            onChange = {e => setLocalInput({...localInput, password : e.target.value})}
                            required
                        />
                    </div>
                    <div className="action-button">
                        <button className="btn btn-black" type="submit">
                            {loading ? `LOGGIN IN` : `LOGIN`}
                        </button>
                    </div>
                    <div className="sub-text">
                        Don't have an account?{" "}
                        <Link to="/signup">
                            <span>
                                Sign up!
                            </span>
                        </Link>
                    </div>
                    <div className="sub-text">
                        Forgot Password?
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
