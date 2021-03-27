import React from 'react'
import './Toast.css'

function Toast({toast, setToast}) {

    return (
        <div
            onClick={(e) => (e.stopPropagation())}
            className={toast.show === true ? "snack-bar active" : "snack-bar"}>
            <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M437.3 30L202.7 339.3L64 200.7l-64 64L213.3 478L512 94z"></path></svg>
            {`Successfully ${toast.action}ed`}
            <svg
                onClick = {() => setToast({...toast, show : false})}
                className="cross" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M20 20L4 4m16 0L4 20" strokeWidth="2" strokeLinecap="round"></path></g></svg>
        </div>
    )
}

export default Toast
