import React, {useState} from 'react'
import Header from '../Header'
import DrugstoreCard from './DrugstoreCard'
import ServiceCard from './ServiceCard'
import {nanoid} from 'nanoid'

import '../../styles/about.css'

// Assets
import Drug from '../../assets/drug.svg'
import MobileStore from '../../assets/mobile-store.svg'

function About() {

    const [mobile, setMobile] = useState('')

    const services = [
        {
            title: 'داروخانه',
            description: 'مایل هستم فقط بعنوان داروخانه فعالیت کنم و در بخش صرفا سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم ',
            thumbnail: Drug,
            link: '/'
        },
        {
            title: 'فروشگاه آرایشی و بهداشتی',
            description: 'مایل هستم فقط بعنوان داروخانه فعالیت کنم و در بخش صرفا سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم ',
            thumbnail: MobileStore,
            link: '/'
        }
    ]
    
    return (
        <div>
            <Header bg={false} dom={(
                <div className="pharmacies-card-container">
                    <DrugstoreCard name="نام داروخانه شما" des="درمانیتو ، سرویس داروخانه ، داروخانه شما" daynight={true} />
                    <DrugstoreCard opacity=".7" name="نام داروخانه شما" des="درمانیتو ، سرویس داروخانه ، داروخانه شما" daynight={true} />
                    <DrugstoreCard opacity=".6" name="نام داروخانه شما" des="درمانیتو ، سرویس داروخانه ، داروخانه شما" daynight={true} />
                </div>
            )}>
                <div className="text-right">
                <h1 className="text-primary text-bold">شما هم در سلامت و بهبود مردم کشورمون موثر باشید</h1>
                <p className="text-light mb-s">با ثبت نام به عنوان داروخانه یا فروشگاه و داروخانه شما هم به سیستم درمان کمک کنید و به هزاران کاربر خدمات ارائه بدین و روزانه درآمد سفارش های خودتون رو تسویه کنید</p>
                </div>
                <div className="single-line-form mb-s">
                    <input type="text" placeholder="شماره همراه را وارد کنید ..." value={mobile} onChange={e => setMobile(e.target.value)} />
                    <input type="submit" value="ثبت نام سریع" />
                </div>
            </Header>

            <main>
                {/* Counts */}
                <div className="bg-primary position-relative counts-container mb-g overflow-hidden">
                    <div className="container">
                        <div className="grid-wrapper" style={{minHeight: 150}}>    
                            <div className="col-1 flex flex-column flex-justify-center flex-align-center my-1">
                                <span className="text-small">تعداد کاربران درمانیتو</span>
                                <span dir="ltr" className="text-xlarge">+120,000</span>
                            </div>
                            <div className="col-1 flex flex-column flex-justify-center flex-align-center my-1">
                                <span className="text-small">تعداد داروخانه و مراکز</span>
                                <span dir="ltr" className="text-xlarge">+120,000</span>
                            </div>
                            <div className="col-1 flex flex-column flex-justify-center flex-align-center my-1">
                                <span className="text-small">تعداد داروخانه و مراکز</span>
                                <span dir="ltr" className="text-xlarge">+120,000</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services */}
                <div className="container mb-g">
                    <div className="mb">
                        <h2 className="card-title">در درمانیتو چه خدمات ارائه خواهید داد؟</h2>
                        <span className="text-light text-small">خدمت مورد نظر خود را برای ثبت نام انتخاب کنید</span>
                    </div>
                    <div className="grid-wrapper flex-space-between">
                        {services && services.map(service => (
                            <ServiceCard key={nanoid()} data={service} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default About
