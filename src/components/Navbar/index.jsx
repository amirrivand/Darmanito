import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import Logo from "../../assets/logo.svg";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const menuHandler = (e) => {
    setShowMenu((old) => !old);
  };

  const closeMenu = e => {
    setShowMenu(false);
  }

  const Navlist = ({ className, children }) => (
    <ul className={className}>
      <li>
        <Link to="/" className="active" onClick={closeMenu}>صفحه اصلی</Link>
      </li>
      <li>
        <Link to="/" onClick={closeMenu}>درباره ما</Link>
      </li>
      <li>
        <Link to="/contact" onClick={closeMenu}>تماس باما</Link>
      </li>
      <li>
        <Link to="/register" onClick={closeMenu}>عضویت داروخانه‌ها</Link>
      </li>
      {children}
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
              className="burger-menu burger"
            >
              <span className={showMenu ? "active" : ""}></span>
            </button>
          </div>
        </div>
      </div>
      {window.innerWidth < window.innerHeight ? (
        <div className={`mobile__container ${showMenu ? "active" : ""}`}>
          <div className="container">
            <Navlist className="navbar-list text-small" >
              <li>
                <Link to="/faq" onClick={closeMenu}>سوالات متداول</Link>
              </li>
              <li>
                <Link to="/rules" onClick={closeMenu}>قوانین و شرایط</Link>
              </li>
            </Navlist>
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
