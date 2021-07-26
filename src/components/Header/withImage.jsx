import React from 'react'
import '../../styles/header.css'

function HeaderMode({imageSource, imageAlt, children}) {
    return (
        <header className="_withImage header__backgroundImage">
            <div className="container grid-wrapper">
                <div className="col-d-6 col-m-expand flex flex-column flex-justify-center __body">
                    {children}
                </div>
                <div className="col-d-6 col-m-expand flex flex-justify-center flex-align-center row-m-1">
                    <img src={imageSource} alt={imageAlt} />
                </div>
            </div>
        </header>
    )
}

export default HeaderMode
