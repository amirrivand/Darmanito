import React from 'react'
import Card from '../Card'

// Assets
import FastSearch from '../../assets/fastsearch.svg'
import Economy from '../../assets/economy.svg'
import Comfortable from '../../assets/comfortable.svg'
import Search from '../../assets/search.svg'
import Demo from '../../assets/about.svg'

function AboutCard() {
    return (
        <div className="mb-g">
            <Card side={(
                <div className="play-demo">
                    <img src={Demo} alt="مشاهده دمو اپلیکیشن" />
                    <button className="play" type="button"></button>
                </div>
            )}>
                <h3 className="card-title text-primary text-bold">درباره درمانیتو</h3>
                <p className="text-small text-light">درمانیتو یک سامانه است که امکان سفارش دارو، محصولات آرایشی بهداشتی نوبت گیری و مشاوره پزشکان را به راحتی و بصورت آنلاین فراهم کرده است.</p>
                <div className="property-box m-hidden">
                    <div className="property">
                        <img src={FastSearch} alt="" />
                        <span></span>
                    </div>
                    <div className="property">
                        <img src={Economy} alt="" />
                        <span></span>
                    </div>
                    <div className="property">
                        <img src={Comfortable} alt="" />
                        <span></span>
                    </div>
                    <div className="property">
                        <img src={Search} alt="" />
                        <span></span>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default AboutCard;