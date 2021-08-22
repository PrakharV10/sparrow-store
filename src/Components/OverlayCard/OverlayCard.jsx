import React from 'react'
import './OverlayCard.css'

function OverlayCard() {
    return (
        <div className="card-series">
            <div className="overlay-card overlay">
                <img src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="card-pic" className="rsp-img" />
                <div className="overlay-text">
                    Notepads
                </div>
            </div>
            <div className="overlay-card overlay">
                <img src="https://images.unsplash.com/photo-1500160503851-c04cefe545a9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="card-pic" className="rsp-img" />
                <div className="overlay-text">
                    Pen Tablet
                </div>
            </div>
            <div className="overlay-card overlay">
                <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="card-pic" className="rsp-img" />
                <div className="overlay-text">
                    Graphics Card
                </div>
            </div>
        </div>
    )
}

export default OverlayCard
