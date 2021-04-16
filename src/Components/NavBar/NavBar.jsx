import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuth, useCart } from '../../Context/context'
import NavSideBar from '../NavSideBar/NavSideBar';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css'

function NavBar() {
    
    const { state } = useCart();
    const [showMenu, setShowMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const { state: { isUserLoggedIn } } = useAuth();

    return (
        <nav className="nav-bar">
            <div className="left-nav">
                <svg onClick={() => setShowMenu(!showMenu)} width="1em" height="1em" viewBox="0 0 512 512">
                    <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z" fill="currentColor"></path><path d="M432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z" fill="currentColor"></path><path d="M432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z" fill="currentColor"></path>
                </svg>
                <Link to="/">
                    PHOENIX
                </Link>
            </div>

            <ul className="mid-nav-links">
                <li>
                    <NavLink to="/">
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products">
                        PRODUCTS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products">
                        SKETCHBOOKS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products">
                        TABLETS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products">
                        LAPTOPS
                    </NavLink>
                </li>
            </ul>

            <div className="right-nav-links">
                <div>
                    <span className="badge">
                        <svg onClick={() => setShowSearch(true)} width="1em" height="1em" viewBox="0 0 32 32">
                            <path d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9z" fill="currentColor">
                            </path>
                        </svg>
                    </span>

                    <SearchBar showSearch={showSearch} setShowSearch={setShowSearch} />

                    {isUserLoggedIn && <Link to="/account">
                        <span className="badge">
                            <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" stroke="currentColor" fill="transparent" strokeWidth="1.7px"></path></svg>
                        </span>
                    </Link>}

                    <Link to="/wishlist">
                        <span className="badge">
                            <svg viewBox="0 0 256 256">
                                <path d="M128 224a7.998 7.998 0 0 1-3.91-1.02C119.84 220.6 20 163.863 20 92a60.02 60.02 0 0 1 108-36.04A60.02 60.02 0 0 1 236 92c0 30.565-17.714 62.005-52.648 93.446a317.366 317.366 0 0 1-51.443 37.534A7.998 7.998 0 0 1 128 224zm-3.91-14.98zM80 48a44.05 44.05 0 0 0-44 44c0 55.245 73.98 103.719 91.997 114.7C146.007 195.707 220 147.163 220 92a44.009 44.009 0 0 0-84.618-16.95a8 8 0 0 1-14.764 0A43.912 43.912 0 0 0 80 48z" fill="currentColor"></path>
                            </svg>
                            {state.wishList.length !== 0 && <div className="number">{state.wishList.length}</div>}
                        </span>
                    </Link>                       

                    <Link to="/cart">
                        <span className="badge">
                        <svg width="1em" height="1em" viewBox="0 0 256 256"><path d="M216 64h-40.68a47.99 47.99 0 0 0-94.64 0H40a16.018 16.018 0 0 0-16 16v128a16.018 16.018 0 0 0 16 16h176a16.018 16.018 0 0 0 16-16V80a16.018 16.018 0 0 0-16-16zm-88-24a32.058 32.058 0 0 1 30.987 24H97.013A32.058 32.058 0 0 1 128 40zm88 168H40V80h40v24a8 8 0 0 0 16 0V80h64v24a8 8 0 0 0 16 0V80h40z" fill="currentColor"></path></svg>
                            {state.cart.length !== 0 &&<div className="number">{state.cart.length}</div>}
                        </span>
                    </Link>
                    
                </div>
            </div>
            <NavSideBar setShowMenu={setShowMenu} showMenu={showMenu}/>
        </nav>
    )
}

export default NavBar
