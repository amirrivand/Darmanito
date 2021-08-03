import React, { useState } from "react";
// Assets
import AppDemo from "../../assets/mobile-app-demo.svg";
import Android from "../../assets/android.svg";
import Bazzar from "../../assets/download-bazaar.svg";
import Sibapp from "../../assets/download-sibapp.svg";

function DownloadBox() {
  const [mobile, setMobile] = useState("");

  return (
    <section className="bg-primary position-relative overflow-hidden pt-1 mb-g">
      <div className="dlbox-background"></div>
      <div className="container position-relative">
        <div className="grid-wrapper dlbox clear-row-gap">
          <div className="col-15 flex flex-column flex-justify-center">
            <strong className="text-large mb-s">
              دانلود اپلیکیشن درمانیتو
            </strong>
            <span className="text-small">
              برای دریافت لینک دانلود، شماره موبایل خود را وارد کنید.
            </span>
            <div className="single-line-form mb-s">
              <input
                type="text"
                placeholder="شماره همراه را وارد کنید ... 900 36 61 0912"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <input type="submit" value="بفرست" />
            </div>
            <div className="btn-group mb-s">
              <button className="btn btn-secondary flex flex-align-center flex-justify-center">
                <img src={Android} alt="" style={{ marginLeft: "16px" }} />
                دانلود مستقیم
              </button>
              <button className="btn btn-secondary flex flex-align-center flex-justify-center">
                <img src={Bazzar} alt="" />
              </button>
              <button className="btn btn-secondary flex flex-align-center flex-justify-center">
                <img src={Sibapp} alt="" />
              </button>
            </div>
          </div>
          <div
            className="mr-auto demoImage col-1 flex"
            style={{ alignItems: "flex-end" }}
          >
            <img className="m-auto" src={AppDemo} alt="دانلود اپلیکیشن درمانیتو" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadBox;
