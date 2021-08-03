import React, {useState} from 'react'
import Header from '../Header'

function Contact() {

    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const formHandler = e => {
        e.preventDefault();
        window.alert('این سرویس فعال نمی باشد!');
    }
    return (
        <div>
            <Header textMode={true}>تماس با ما</Header>
            <main>
                <div className="container mb-g">
                    <div className="flex flex-wrap flex-space-between flex-column-reverse-m">
                        <div className="g-form">
                            <form onSubmit={formHandler}>
                                <label className="text-xsmall">
                                    نام و نام خانوادگی
                                    <input type="text" value={fullname} onChange={e => setFullname(e.target.value)} placeholder="" />
                                </label>
                                <label className="text-xsmall">
                                    ایمیل یا شماره همراه
                                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="" />
                                </label>
                                <label className="text-xsmall">
                                    پیام شما
                                    <textarea placeholder="" onChange={e => setMessage(e.target.value)} value={message}></textarea>
                                </label>
                                <button className="btn btn-primary-outline" type="submit">ارسال پیام</button>
                            </form>
                        </div>
                        <div className="flex-auto mb">
                            <div className="map">
                                <div className="information">
                                    <div className="grid-wrapper">
                                        <div className="col-1 flex flex-column flex-row-m flex-space-between">
                                            <div className="flex flex-column">
                                                <span>ایمیل</span>
                                                <a className="text-primary text-small text-bold" href="mailto:info@nahiraTech.com">info@nahiraTech.com</a>
                                            </div>
                                            <div>
                                                <span>تلفن ثابت</span>
                                                <a className="text-primary text-small text-bold" href="tel:+982144219671">۰۲۱-۴۴۲۱۹۶۷۱</a>
                                            </div>
                                        </div>
                                        <div className="col-1">
                                            <span>آدرس</span>
                                            <address className="text-light text-small">
                                            تهران، طرشت، خیابان شهید چوب تراش، خیابان شهید حسین مردی، بن‌بست پنجم، پلاک 15، واحد 1
                                            </address>
                                        </div>
                                    </div>
                                </div>
                                <iframe title="Nahira Map Location on Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5738.453445955945!2d51.400015085001165!3d35.71995655890394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00c93fcee727%3A0x8b6675fa660572b8!2sNahira!5e0!3m2!1sen!2sus!4v1627373509318!5m2!1sen!2sus"loading="lazy"></iframe>
                            </div>                            
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Contact
