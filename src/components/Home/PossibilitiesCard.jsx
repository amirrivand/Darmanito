import React from 'react'
import Card from '../Card'

// Assets
import Drugstore from '../../assets/drugstore.svg'
import Shop from '../../assets/store.svg'
import Visit from '../../assets/visitonline.svg'
import Reserve from '../../assets/reserveonline.svg'

function PossibilitiesCard() {
    return (
        <div className="mb-g">
            <h3 className="card-title text-bold text-primary">امکانات درمانیتو</h3>
            <Card tabletExpand={true} side={(
                <ul className="possibilities">
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
            )}>
                <div className="text-small mb-l">
                    <strong className="mb-s block">داروخانه آنلاین</strong>
                    <p>در سرویس داروخانه شما میتوانید نسخه دارویی یا محصول بهداشتی خودتون رو برای پیدا شدن به داروخانه و فروشگاه ها سفارش بدید.</p>
                </div>
                <ul className="steps">
                    <li>
                        <span className="text-small">قدم اول</span>
                        <p className="description text-xsmall text-light">وارد بخش سفارش با عکس نسخه شوید و عکس و توضیحات را وارد کنید.</p>
                    </li>
                    <li>
                        <span className="text-small">قدم دوم</span>
                        <p className="description text-xsmall text-light">بعد از ارسال عکس نسخه، باید آدرس محل خودتون رو وارد کنید.</p>
                    </li>
                    <li>
                        <span className="text-small">قدم سوم</span>
                        <p className="description text-xsmall text-light">اگر نتیجه جستجوی نسخه موفقیت آمیز باشه باید منتظر تحویل سفارش باشید.</p>
                    </li>
                </ul>
                
            </Card>
        </div>
    )
}

export default PossibilitiesCard
