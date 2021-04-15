import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { useCart } from '../../Context/context';
import './SearchBar.css';

function SearchBar() {

    const { dispatch } = useCart();
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    function handleClick(e) {
        e.preventDefault();
        dispatch({ type: "SEARCH_FILTER", payload: input })
        navigate("/products")
    }

    return (
        <form className="search-bar" onSubmit={(e) => handleClick(e)}>
            <input
                onChange = {(e) => setInput(e.target.value)}
                placeholder="Search Products Here" />
            <button
                type = "submit">
                <svg
                width="1em" height="1em" viewBox="0 0 32 32"><path d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9z"></path></svg>
            </button>
        </form>
    )
}

export default SearchBar
