import React from 'react'
import './Header.css'

import SearchBar from '../SearchBar/SearchBar'

function Header() {
    return (
        <header className="header">
            <div className="logo">
                SPARROW
            </div>
            <SearchBar />
        </header>
    )
}

export default Header
