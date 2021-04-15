import React, { useEffect, useState } from 'react'
import './Login.css'
import Pagination from '../../Components/Pagination/Pagination'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../Context/context'

function Login() {

    const { state: { isUserLoggedIn }, dispatch } = useAuth();
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
            let { data: { success, userId, message } } = await axios.post('https://Sparrow-Store.prakhar10v.repl.co/login', localInput)
            if (success) {
                setErrorMessage(message)
                setLoading(false)
                dispatch({type : "SAVE_LOGIN_DETAILS", payload : userId})
            } else {
                setErrorMessage(message)
                setLoading(false);
            }
        } catch (err) {
            console.log(JSON.parse(err))
            setErrorMessage("")
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
                <form onSubmit={e => loginSubmitHandler(e)} className="login-modal">
                    <div className="login-head">
                        LOGIN
                    </div>
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
                        <button className="btn btn-yellow" type="submit">
                            {loading ? `LOGGIN IN` : `LOG IN`}
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
