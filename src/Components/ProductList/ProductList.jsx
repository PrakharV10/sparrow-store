import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { useCart } from '../../Context/Cart-Context'
import './ProductList.css'

function ProductList() {

    const { data } = useCart();

    return (
        <div className="product-list">
            <div className="product-display">
                {
                    data.map((product) => {
                        return (
                            <div key={product.id}>
                                <ProductCard
                                    product={product}
                                />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ProductList
