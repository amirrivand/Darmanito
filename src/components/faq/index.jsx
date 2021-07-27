import React from 'react'
import Header from '../Header'

// Assets
import Drugstore from '../../assets/drugstore.svg'
import Shop from '../../assets/store.svg'
import Visit from '../../assets/visitonline.svg'
import Reserve from '../../assets/reserveonline.svg'

function FAQ() {
    return (
        <div>
            <Header textMode={true}>
                سوالات متداول
            </Header>
            <main>
                <div className="container">
                    <h2 className="card-title">سوال شما درباره کدوم سرویس هست؟</h2>
                    <ul className="toggle-menu flex flex-space-between">
                        <li>
                            <button className="icon-btn">
                                <img src={Drugstore} alt="" />
                                <span className="text-xsmall">داروخانه</span>
                            </button>
                        </li>
                        <li>
                            <button className="icon-btn">
                                <img src={Shop} alt="" />
                                <span className="text-xsmall">فروشگاه</span>
                            </button>
                        </li>
                        <li>
                            <button className="icon-btn">
                                <img src={Visit} alt="" />
                                <span className="text-xsmall">ویزیت آنلاین</span>
                            </button>
                        </li>
                        <li>
                            <button className="icon-btn">
                                <img src={Reserve} alt="" />
                                <span className="text-xsmall">نوبت دهی آنلاین</span>
                            </button>
                        </li>
                    </ul>

                    {/* Q&A */}
                    <ul className="mb-g details">
                        <li>
                            <details>
                                <summary className="text-small">هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟</summary>
                                <p className="text-xsmall"></p>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className="text-small">هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟</summary>
                                <p className="text-xsmall"></p>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className="text-small">درمانیتو فقط در تهران و کرج فعال هست؟</summary>
                                <p className="text-xsmall">خیر، ما هم اکنون در تهران در حال فعالیت هستیم</p>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className="text-small">هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟</summary>
                                <p className="text-xsmall"></p>
                            </details>
                        </li>
                    </ul>
                </div>
                
            </main>
        </div>
    )
}

export default FAQ
