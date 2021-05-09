import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { useCart } from '../../Context/context'
import './ProductList.css'
import AuthModal from '../AuthModal/AuthModal';
import axios from 'axios';

function ProductList({setLoading}) {

    const { cartState, cartDispatch } = useCart();
    const [authModal, setAuthModal] = useState(false)

    useEffect(() => {
        serverGetProducts()
    }, [])

    async function serverGetProducts() {
        const { data: { success, message, products } } = await axios.get(`https://Sparrow-Store.prakhar10v.repl.co/products`)
        if (success) {
            cartDispatch({ type: "GET_PRODUCTS_FROM_SERVER", payload: products })
            setLoading(false)
        } else {
            setLoading(false)
            alert(message)
        }
    }

    function getSorted(data, sortBy) {
        if (sortBy && sortBy === "HIGH_TO_LOW")
            return data.sort(function (a, b) { return b.price - a.price })
        else if (sortBy && sortBy === "LOW_TO_HIGH")
            return data.sort(function (a, b) { return a.price - b.price })
        else
            return data
    }

    function searchFilter(data, searchKeyWord) {
        return data.filter(item => {
            if (item.name.toLowerCase().includes(searchKeyWord.toLowerCase()) === true || item.brand.toLowerCase().includes(searchKeyWord.toLowerCase()) === true)
                return item
            return null
        })
    }

    function getFiltered(sortedData, fastDelivery, outOfStock) {
        return sortedData
            .filter(item => {
            if (fastDelivery === true)
                return item.fastDelivery === true
            return item
            })
            .filter(item => {
                if (outOfStock === false)
                    return item.inStock === true
                return item
            })
    }

    const searchedData = searchFilter(cartState.data, cartState.searchKeyWord)
    const sortedData = getSorted(searchedData, cartState.sortBy)
    const filteredData = getFiltered(sortedData, cartState.fastDelivery, cartState.outOfStock)

    return (
        <div className="product-list">
            <div className="product-display">
                {
                    filteredData.slice(0, 12).map((product) => {
                        return (
                            <div key={product._id}>
                                <ProductCard
                                    setAuthModal = {setAuthModal}
                                    product={product}
                                />
                                {authModal && <AuthModal authModal={authModal} setAuthModal={setAuthModal} />}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ProductList
