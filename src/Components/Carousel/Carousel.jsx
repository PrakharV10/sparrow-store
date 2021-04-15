import React from 'react'
import { Link } from 'react-router-dom'
import './Carousel.css'

function Carousel() {

    return (
        <div className="carousel">
            <div className="image-wrapper overlay">
                <img src="https://images.unsplash.com/photo-1555529669-26f9d103abdd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="main" className="rsp-img" />
            </div>
            <div className="overlay-text">
                <div className="up-title">Latest Collections</div>
                <div className="title">
                    SEASON SALE
                </div>
                <Link to="/products">
                    <button
                        className="btn btn-black">SHOP NOW
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Carousel
