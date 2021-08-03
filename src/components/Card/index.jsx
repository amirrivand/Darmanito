import React from 'react'

function Card({children, side, tabletExpand = false}) {
    return (
        <div className="grid-wrapper card">
            <div className={`col-1 col-m-expand flex flex-justify-center ${tabletExpand && 'col-t-expand'}`}>{side}</div>
            <div className={`col-2 col-m-expand flex flex-column flex-justify-center ${tabletExpand && 'col-t-expand'}`}>
                {children}
            </div>
        </div>
    )
}

export default Card
