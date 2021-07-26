import React, {useState} from 'react'

// Assets
import RegisterMan from '../../assets/register.svg'

function Registeration() {

    const [mobile, setMobile] = useState('')

    return (
        <section className="mb-g registeration-container">
            <div className="registeration container container-small box position-relative">
                <div className="grid-wrapper clear-row-gap">
                    <div className="col-m-expand col-d-6 padding-large flex flex-column flex-justify-center">
                        <h3 className="text-bold card-title">عضویت داروخانه یا مراکز درمانی</h3>
                        <p className="text-small text-light">اگر به عنوان داروخانه یا مرکز درمانی قصد دارید در روند درمان و کسب کار خودتان تغییری ایجاد کنید درمانیتو منتظر شماست.</p>
                        <div class="single-line-form">
                            <form>
                                <input type="text" placeholder="شماره همراه را وارد کنید ..." value={mobile} onChange={e => setMobile(e.target.value)} />
                                <input type="submit" value="ثبت نام سریع" />
                            </form>
                        </div>
                    </div>
                    <div className="col-d-6 col-m-expand flex flex-justify-center flex-align-end row-m-1 regImage">
                        <img src={RegisterMan} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Registeration
