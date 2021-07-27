import React from 'react'
import '../../styles/header.css'

function HeaderMode({imageSource, imageAlt, children, dom, bg}) {
    return (
        <header className={`_withImage header__backgroundImage ${!bg && 'disableBg'}`}>
            <div className="container grid-wrapper">
                <div className="col-d-6 col-m-expand flex flex-column flex-justify-center __body">
                    {children}
                </div>
                <div className="col-d-6 col-m-expand flex flex-justify-center flex-align-center row-m-1">
                    {imageSource && <img src={imageSource} alt={imageAlt} />}
                    {dom && dom}
                </div>
            </div>
        </header>
    )
}

export default HeaderMode
