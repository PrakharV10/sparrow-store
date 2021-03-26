import React from 'react'
import './ProductCard.css'

function ProductCard() {
    return (
        <div className="product-card">
            <div className="product-image">
                
            </div>
            <div className="product-details">
                <div className="product-brand">
                    Apple
                </div>
                <div className="product-name">
                    iPhone 11 (128GB) - White
                </div>
                <div className="review">
                    100 Reviews
                </div>
                <div className="price">
                    <div className="now">Rs. 59,900</div>
                    <div className="before">Rs. 1,00,000</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
