import React from "react";

// Assets
import SupportIcon from "../assets/support.svg";

function Support() {
  return (
    <div className="bg-primary">
      <div className="container support flex flex-space-between flex-align-center flex-wrap">
        <div
          className="support__text text-xsmall"
          style={{ lineHeight: "40px" }}
        >
          <strong className="text-medium">پشتیبانی درمانیتو</strong>
          <span>پاسخگویی در روزهای کاری از 9 صبح تا 9 شب</span>
        </div>
        <div className="mr-auto support__button">
          <button
            type="button"
            className="btn btn-secondary flex flex-nowrap flex-space-between flex-align-center"
          >
            <img src={SupportIcon} alt="" style={{ marginLeft: 16 }} />
            <span dir="ltr">پشتیبانی: ۰۲۱۴۴۲۱۹۶۷۱</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Support;
