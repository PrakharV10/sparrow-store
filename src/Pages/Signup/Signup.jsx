import React from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../../Components/Pagination/Pagination'

function Signup() {
    return (
        <div className="login-page common-wrapper">
            <Pagination />
            <div className="login-modal-bg">
                <form className="login-modal">
                    <div className="login-head">
                        SIGN UP
                    </div>
                    <div className="login-fields">
                        <input placeholder="Username" name="username" required />
                        <input type="email" placeholder="Email" name="email" required />
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="action-button">
                        <button className="btn btn-yellow" type="submit">
                            SIGN IN
                        </button>
                    </div>
                    <div className="sub-text">
                        Already have an account?{" "}
                        <Link to="/login">
                            <span>
                                Log in!
                            </span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
