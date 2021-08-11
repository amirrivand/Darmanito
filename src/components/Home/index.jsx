import React from 'react'
import Header from '../Header'
import HeaderImage from '../../assets/slide__image.svg'
import AboutCard from './AboutCard'
import PossibilitiesCard from './PossibilitiesCard'
import DownloadBox from './DownloadBox'
import Registeration from './Registeration'
import {Link} from 'react-router-dom'

import '../../styles/home.css'

function Home() {
    return (
        <>
            <div className="mb-g">
                <Header image={HeaderImage} alt="اپلیکیشن درمانیتو">
                    <h1 className="text-primary text-bold">اپلیکیشن درمانیتو</h1>
                    <p className="text-light mb-s">درمانیتو، سامانه هوشمند درمان و سلامت</p>
                    <div className="btn-group">
                        <button>
                            <Link className="btn btn-primary btn__download-text" to="/">
                                <span>دانلود درمانیتو</span>
                                <span>دانلود مستقیم اپ</span>
                            </Link>
                        </button>
                        <button>
                            <Link className="btn btn-primary-outline" to="/register">عضویت داروخانه ها</Link>
                        </button>
                    </div>
                </Header>
            </div>
            <main>
                <section className="container">
                    <AboutCard />
                    <PossibilitiesCard />
                </section>
                
                <DownloadBox />
                <Registeration />
            </main>
            
        </>
    )
}

export default Home
