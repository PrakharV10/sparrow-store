import React from 'react'
import { Link } from 'react-router-dom'
import './Carousel.css'
import bgImg from '../../assets/image/background-img-compress.jpg';

function Carousel() {

    return (
        <div className="carousel">
            <div className="image-wrapper overlay">
                <img src={bgImg} alt="main" className="rsp-img" />
            </div>
            <div className="overlay-text">
                <div className="up-title">New Collections</div>
                <div className="title">
                    Get Started with Graphics Design Today!
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
