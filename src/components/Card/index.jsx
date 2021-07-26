import React from 'react'

function Card({children, side}) {
    return (
        <div className="grid-wrapper card">
            <div className="col-d-5 col-m-expand">{side}</div>
            <div className="col-d-6 col-m-expand flex flex-column flex-justify-center">
                {children}
            </div>
        </div>
    )
}

export default Card
