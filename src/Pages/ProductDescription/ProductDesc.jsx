import { ThreeDots, useLoading } from '@agney/react-loading'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductShot from '../../Components/ProductDescShot/ProductShot'
import ProductDetails from '../../Components/ProductDetails/ProductDetails'
import './ProductDesc.css'

function ProductDesc() {

    const [current, setCurrent] = useState([])
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    const { containerProps, indicatorEl } = useLoading({
        loading: loading,
        indicator: <ThreeDots width="50" />
      });

    async function serverFetchItem() {
        const { data: { success, product } } = await axios.get(`https://Sparrow-Store.prakhar10v.repl.co/products/${id}`)
        if (success) {
            setCurrent(product)
            setLoading(false)
        } else {
            alert('Some Error Occured')
        }
    }

    useEffect(() => {
        serverFetchItem()
    }, [])

    return (
        <div className="common-wrapper" >
            <div className="pagination">
                <Link to="/">
                    Home
                </Link>{" | "}
                {current.name}
            </div>

            {loading && <section className='product-loader desc-loader' {...containerProps}>{indicatorEl}</section>}
            {!loading && <div className="product-desc">
                <div className="container">
                    <ProductShot product={current} />
                    <ProductDetails product={current} />
                </div>
            </div>}
        </div >
    )
}

export default ProductDesc
