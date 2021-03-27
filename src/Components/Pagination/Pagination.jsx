import React from 'react'
import './Pagination.css'

function Pagination({route}) {
    return (
        <div className="pagination">
            Home | {route}
        </div>
    )
}

export default Pagination
