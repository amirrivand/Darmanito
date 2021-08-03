import React from "react";
import "../../styles/header.css";

function HeaderMode({ imageSource, imageAlt, children, dom, bg }) {
  return (
    <header
      className={`_withImage header__backgroundImage ${bg && "disableBg"}`}
    >
      <div className="container">
        <div className="grid-wrapper flex-reverse">
          <div className="col-1 flex flex-column flex-justify-center __body">
            {children}
          </div>
          <div className="col-1 flex flex-justify-center flex-align-center">
            {imageSource && <img src={imageSource} alt={imageAlt} />}
            {dom && dom}
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderMode;
