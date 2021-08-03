import React, { useState } from "react";

// Assets
import RegisterMan from "../../assets/register.svg";

function Registeration() {
  const [mobile, setMobile] = useState("");

  return (
    <section className="mb-g registeration-container">
      <div className="registeration container container-small box position-relative">
        <div className="grid-wrapper flex-reverse">
          <div className="col-15 padding-large flex flex-column flex-justify-center">
            <h3 className="text-bold card-title">
              عضویت داروخانه یا مراکز درمانی
            </h3>
            <p className="text-small text-light">
              اگر به عنوان داروخانه یا مرکز درمانی قصد دارید در روند درمان و کسب
              کار خودتان تغییری ایجاد کنید درمانیتو منتظر شماست.
            </p>
            <div className="single-line-form">
              <input
                type="text"
                placeholder="شماره همراه را وارد کنید ... "
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <input type="submit" value="ثبت نام سریع" />
            </div>
          </div>
          <div className="col-1 flex flex-justify-center flex-align-end row-m-1 regImage">
            <img src={RegisterMan} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registeration;
