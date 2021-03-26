import React from 'react'
import './SideBar.css'

function SideBar() {
    return (
        <aside className="side-bar">
            <ul className="list">
                <div className="list-title">Categories</div>
                <li>Home</li>
                <li className="collapsable">
                    <div>Smartphones</div>
                    <ul>
                        <li>Apple</li>
                        <li>Realme</li>
                        <li>Samsung</li>
                    </ul>
                </li>
                <li>Earphones</li>
                <li>Watches</li>
            </ul>
            <div className="check-list">
                <div className="list-title">
                    Refine search
                </div>
                <div className="check-title">
                    Brand
                </div>
                <div className="checkbox">
                    <label htmlFor="checkbox-1">
                        <input id="checkbox-1" name="checkbox" type="checkbox" />
                        Apple
                    </label>
                    <label htmlFor="checkbox-2">
                        <input id="checkbox-2" name="checkbox" type="checkbox" />
                        Nokia 
                    </label>
                    <label htmlFor="checkbox-3">
                        <input id="checkbox-3" name="checkbox" type="checkbox" />
                        Samsung
                    </label>
                </div>
            </div>
        </aside>
    )
}

export default SideBar
