import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/navbar.css'
import Logo from '../../assets/logo.svg'
import BurgerMenu from '../../assets/burger-menu.svg'

function Navbar() {
    return (
        <nav>
            <div className="container">
                <div className="flex flex-align-center">
                    <div className="logo flex ml-auto">
                        <img src={Logo} alt="اپلیکیشن درمانیتو" />
                        <div className="flex flex-column flex-space-between">
                            <strong>درمانیتو</strong>
                            <span className="text-xxsmall">همراه شما در درمان</span>
                        </div>
                    </div>
                    <div className="m-auto m-hidden">
                        <ul className="navbar-nav text-small">
                            <li>
                                <Link to="/">صفحه اصلی</Link>
                            </li>
                            <li>
                                <Link to="/about">درباره ما</Link>
                            </li>
                            <li>
                                <Link to="/contact">تماس باما</Link>
                            </li>
                            <li>
                                <Link to="/register">عضویت داروخانه‌ها</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mr-auto">
                        <button className="btn btn-default text-bold m-hidden">دانلود درمانیتو</button>
                    </div>
                    <div className="mr-auto d-hidden">
                        <button type="button" className="burger-menu d-hidden">
                            <img src={BurgerMenu} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
