import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import SortChoice from '../SortChoice/SortChoice'
import { useCart } from '../../Context/Cart-Context'
import './ProductList.css'

function ProductList() {

    const { data } = useCart();

    return (
        <div className="product-list">
            {/* <SortChoice /> */}
            <div className="product-display">
                {
                    data.map(({id, image, name, brand,price, ratings}) => {
                        return (
                            <div key={id}>
                                <ProductCard
                                    image = {image}
                                    name = {name}
                                    brand={brand}
                                    price = {price}
                                    ratings = {ratings}
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
