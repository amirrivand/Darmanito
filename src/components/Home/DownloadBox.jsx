import React, {useState} from 'react'
// Assets
import AppDemo from '../../assets/mobile-app-demo.svg'
import Android from '../../assets/android.svg'
import Bazzar from '../../assets/download-bazaar.svg'
import Sibapp from '../../assets/download-sibapp.svg'

function DownloadBox() {

    const [mobile, setMobile] = useState('')

    return (
        <section className="bg-primary position-relative overflow-hidden mb-g">
            <div className="container grid-wrapper dlbox clear-row-gap">
                <div className="col-d-6 col-m-expand flex flex-column flex-justify-center">
                    <strong className="text-large mb-s">دانلود اپلیکیشن درمانیتو</strong>
                    <span className="text-small">برای دریافت لینک دانلود، شماره موبایل خود را وارد کنید.</span>
                    <div class="single-line-form mb-s">
                        <form>
                            <input type="text" placeholder="شماره همراه را وارد کنید ..." value={mobile} onChange={e => setMobile(e.target.value)} />
                            <input type="submit" value="بفرست" />
                        </form>
                    </div>
                    <ul className="btn-group">
                        <li>
                            <a href="/" title="" class="btn btn-secondary flex flex-align-center flex-justify-center">
                                <img src={Android} alt="" style={{marginLeft: '16px'}} />
                                دانلود مستقیم
                            </a>
                        </li>
                        <li>
                            <a href="/" title="" class="btn btn-secondary flex flex-justify-center">
                                <img src={Bazzar} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/" title="" class="btn btn-secondary flex flex-justify-center">
                                <img src={Sibapp} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mr-auto demoImage col-m-expand col-d-6 flex" style={{alignItems: "flex-end"}}>
                    <img src={AppDemo} alt="دانلود اپلیکیشن درمانیتو" />
                </div>
                
            </div>
        </section>
    )
}

export default DownloadBox
