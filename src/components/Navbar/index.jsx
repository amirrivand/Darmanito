import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import Logo from "../../assets/logo.svg";
// import BurgerMenu from '../../assets/burger-menu.svg'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const menuHandler = (e) => {
    console.log("log me");
    setShowMenu((old) => !old);
  };

  const Navlist = ({ className }) => (
    <ul className={className}>
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
  );

  return (
    <nav className="position-relative" style={showMenu ? {position: 'sticky'} : null}>
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
            <Navlist className="navbar-nav text-small" />
          </div>
          <div className="mr-auto m-hidden">
            <button className="btn btn-default text-bold">
              دانلود درمانیتو
            </button>
          </div>
          <div className="mr-auto d-hidden">
            <button
              type="button"
              onClick={menuHandler}
              className="burger-menu d-hidden burger"
            >
              <span className={showMenu ? "active" : ""}></span>
            </button>
          </div>
        </div>
      </div>
      {window.innerWidth < window.innerHeight ? (
        <div className={`mobile__container ${showMenu ? "active" : ""}`}>
          <div className="container">
            <Navlist className="navbar-list text-small" />
            <hr />
            <button className="btn btn-default text-bold">
              دانلود درمانیتو
            </button>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;
