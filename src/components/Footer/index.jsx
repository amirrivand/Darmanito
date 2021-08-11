import React from "react";
import { Link } from "react-router-dom";

// Assets
import Logo from "../../assets/logo.svg";
import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Bazzar from "../../assets/download-bazaar.svg";
import Sibapp from "../../assets/download-sibapp.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="grid-wrapper flex-space-between">
          <div className="col-2 col-m-expand">
            <div className="flex flex-column">
              <div className="logo flex mb-s">
                <img src={Logo} alt="اپلیکیشن درمانیتو" />
                <div className="flex flex-column flex-space-between">
                  <strong className="block">درمانیتو</strong>
                  <span className="text-xxsmall">همراه شما در درمان</span>
                </div>
              </div>
              <div className="mb-s text-xsmall">
                <strong>سوپر اپلیکیشن حوزه درمان و سلامت</strong>
                <p className="text-light">
                  تمام حقوق مادی و معنوی این وبسایت متعلق به درمانیتو است.
                </p>
              </div>
              <ul className="social-group">
                <li>
                  <a href="/" title="">
                    <img src={LinkedIn} alt="LinkedIn Account" />
                  </a>
                </li>
                <li>
                  <a href="/" title="">
                    <img src={Twitter} alt="Twitter Account" />
                  </a>
                </li>
                <li>
                  <a href="/" title="">
                    <img src={Instagram} alt="Instagram Account" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1 m-hidden">
            <strong className="text-small mb-s block">خدمات درمانیتو</strong>
            <ul className="navbar-list">
              <li>
                <Link to="/" title="داروخانه آنلاین">
                  داروخانه آنلاین
                </Link>
              </li>
              <li>
                <Link to="/" title="فروشگاه آنلاین">
                  فروشگاه آنلاین
                </Link>
              </li>
              <li>
                <Link to="/" title="ویزیت آنلاین">
                  ویزیت آنلاین
                </Link>
              </li>
              <li>
                <Link to="/" title="پرونده پزشکی">
                  پرونده پزشکی
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-1 m-hidden">
            <strong className="text-small mb-s block">صفحات درمانیتو</strong>
            <ul className="navbar-list">
              <li>
                <Link to="/contacts" title="تماس با ما">
                  تماس باما
                </Link>
              </li>
              <li>
                <Link to="/about" title="درباره ما">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link to="/faq" title="سوالات متداول">
                  سوالات متداول
                </Link>
              </li>
              <li>
                <Link to="/rules" title="قوانین و شرایط">
                  قوانین و شرایط
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-2 m-hidden">
            <strong className="text-small mb-s block">دانلود درمانیتو</strong>
            <div className="btn-group">
              <button className="btn btn-dark flex flex-justify-center flex-align-center">
                <img src={Bazzar} alt="Bazaar" />
              </button>
              <button className="btn btn-dark flex flex-justify-center flex-align-center">
                <img src={Sibapp} alt="Sibapp" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
