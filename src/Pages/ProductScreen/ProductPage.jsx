import React from 'react'
import Pagination from '../../Components/Pagination/Pagination'
import ProductList from '../../Components/ProductList/ProductList'
import SideBar from '../../Components/SideBar/SideBar'
import './ProductPage.css'

function ProductPage() {


    return (
        <div className="common-wrapper">
        <Pagination />
        <div className="product-page">
            <SideBar />
            <div className="product-container">
                <div className="head">
                    Products
                </div>
                <ProductList />
            </div>
            </div>
        </div>
    )
}

export default ProductPage
