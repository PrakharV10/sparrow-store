import React from 'react'
import ProductList from '../../Components/ProductList/ProductList'
import SideBar from '../../Components/SideBar/SideBar'
import './ProductPage.css'

function ProductPage({ route }) {


    return (
        <div className="product-page">
            <SideBar />
            <div className="product-container">
                <div className="head">
                    {route}
                </div>
                <ProductList />
            </div>
        </div>
    )
}

export default ProductPage
