import React, { useEffect} from 'react'
import axios from 'axios'

import ProductCard from '../ProductCard/ProductCard'
import { useCart } from '../../Context/Cart-Context'
import './ProductList.css'

function ProductList() {

    const { state, dispatch } = useCart();
    
    const getServerData = async () => {
        try {
            const { data : {products}} = await axios.get('/api/products');
            dispatch({ type: "DATA_FROM_SERVER", payload: products })
        } catch (err) {
          console.log(err);
        }
    }

    useEffect(() => {
        getServerData()
    }, [])

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

    const searchedData = searchFilter(state.data, state.searchKeyWord)
    const sortedData = getSorted(searchedData, state.sortBy)
    const filteredData = getFiltered(sortedData, state.fastDelivery, state.outOfStock)

    return (
        <div className="product-list">
            <div className="product-display">
                {
                    filteredData.slice(0, 12).map((product) => {
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
