import React from 'react'
import { Link } from 'react-router-dom'
import './AuthModal.css'

function AuthModal({authModal, setAuthModal}) {
    return (
        <div
            onClick = {() => setAuthModal(false)}
            className={authModal ? "modal-bg" : "modal-bg hide"}>
            <div
                onClick={e => e.stopPropagation()}
                className="modal auth">
                <div className="modal-text">
                    Want to save item to your wishlist?
                </div>
                <div className="modal-subtext">
                    Log in to continue.
                </div>
                <div className="bottom-button">
                    <div className="auth-link">
                        <Link
                            to="/login">
                            LOGIN
                        </Link>
                    </div>
                    <div onClick = {() => setAuthModal(false)} className="cancel-btn">
                        CANCEL
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthModal
