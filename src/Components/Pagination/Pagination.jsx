import React from 'react'
import { useLocation} from 'react-router'
import { Link } from 'react-router-dom'
import './Pagination.css'

function Pagination() {

    const { pathname } = useLocation()

    return (
        <div className="pagination">
            <Link to="/">
                Home
            </Link>{" "}|{" "}
            <Link to={pathname}>
                {pathname.substr(1)}
            </Link>
        </div>
    )
}

export default Pagination
