import React from "react";

// Assets
import SupportIcon from '../assets/support.svg'

function Support() {
  return (
    <div className="bg-primary">
      <div className="container support flex flex-space-between flex-align-center flex-wrap" >
        <div>
          <p className="support__text text-xsmall" style={{lineHeight: "40px"}}>
            <strong className="text-medium">
              پشتیبانی درمانیتو
            </strong>
            پاسخگویی در روزهای کاری از 9 صبح تا 9 شب
          </p>
        </div>
        <div className="mr-auto support__button">
            <button type="button" className="btn btn-secondary flex flex-space-between flex-align-center">
                <img src={SupportIcon} alt="" style={{marginLeft: 16}} />
                پشتیبانی:
                <span dir="ltr">۰۲۱-۴۴۲۱۹۶۷۱</span>
            </button>
        </div>
      </div>
    </div>
  );
}

export default Support;
