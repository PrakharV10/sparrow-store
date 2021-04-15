import React from 'react'
import { useCart } from '../../Context/context'
import './SideBar.css'

function SideBar() {

    const { state,dispatch } = useCart();

    return (
        <aside className="side-bar">
            <div className="check-list">
                <div className="list-title">
                    Refine search
                </div>
                <div className="check-title">
                    Price
                </div>
                <div className="checkbox">
                    <label htmlFor="radio-1">
                        <input
                            onChange={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
                            checked = {state.sortBy === "HIGH_TO_LOW"}
                            id="radio-1"
                            name="radio"
                            type="radio" />
                        High to Low
                    </label>
                    <label htmlFor="radio-2">
                        <input
                            onChange={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
                            checked = {state.sortBy === "LOW_TO_HIGH"}
                            id="radio-2"
                            name="radio"
                            type="radio" />
                        Low to High 
                    </label>
                </div>

                <div className="check-title">
                    Filter
                </div>
                <div className="checkbox">
                    <label htmlFor="checkbox-1">
                        <input
                            onChange={() => dispatch({ type: "TOGGLE_STOCK" })}
                            checked = {state.outOfStock === true}
                            id="checkbox-1"
                            name="checkbox"
                            type="checkbox" />
                        Include Out of Stock
                    </label>
                    <label htmlFor="checkbox-2">
                        <input
                            onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
                            checked = {state.fastDelivery === true}
                            id="checkbox-2"
                            name="checkbox"
                            type="checkbox" />
                        Fast Delivery Only 
                    </label>
                </div>
            </div>
        </aside>
    )
}

export default SideBar
