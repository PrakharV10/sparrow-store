import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductShot from '../../Components/ProductDescShot/ProductShot'
import ProductDetails from '../../Components/ProductDetails/ProductDetails'
import { useCart } from '../../Context/context'
import './ProductDesc.css'

function ProductDesc() {

    const { id } = useParams();
    const { cartState } = useCart();

    const current = cartState.data.find(one => one.id === id);

    return (
        <div className="common-wrapper">
            <div className="pagination">
                <Link to="/">
                    Home
                </Link>{" | "}
                {current.name}
            </div>
            <div className="product-desc">
                <div className="container">
                    <ProductShot current={current}/>
                    <ProductDetails current={current} />
                </div>
            </div>
        </div>
    )
}

export default ProductDesc
