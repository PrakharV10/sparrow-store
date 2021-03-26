import React from 'react'
import './SearchBar.css';

function SearchBar() {
    return (
        <div class="search-bar">
            <input placeholder="Search Products Here" />
            <svg width="1em" height="1em" viewBox="0 0 32 32"><path d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9z"></path></svg>
        </div>
    )
}

export default SearchBar
