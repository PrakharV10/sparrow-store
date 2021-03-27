import React from 'react'
import './Pagination.css'

function Pagination({route}) {
    return (
        <div class="pagination">
            Home | {route}
        </div>
    )
}

export default Pagination
