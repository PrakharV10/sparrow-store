import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import SortChoice from '../SortChoice/SortChoice'
import './ProductList.css'

function ProductList() {
    return (
        <div className="product-list">
            <SortChoice />
            <ProductCard />
        </div>
    )
}

export default ProductList
