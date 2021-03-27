import React from 'react'
import ProductShot from '../../Components/ProductDescShot/ProductShot'
import ProductDetails from '../../Components/ProductDetails/ProductDetails'
import './ProductDesc.css'

function ProductDesc() {
    return (
        <div className="product-desc">
            <div className="container">
                <ProductShot />
                <ProductDetails />
            </div>
        </div>
    )
}

export default ProductDesc
