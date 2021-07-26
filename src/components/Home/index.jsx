import React from 'react'
import Header from '../Header'
import HeaderImage from '../../assets/slide__image.svg'
import AboutCard from './AboutCard'
import PossibilitiesCard from './PossibilitiesCard'
import DownloadBox from './DownloadBox'
import {Link} from 'react-router-dom'

import '../../styles/home.css'

function Home() {
    return (
        <>
            <div className="mb-g">
                <Header image={HeaderImage} alt="اپلیکیشن درمانیتو">
                    <h1 className="text-primary text-bold">اپلیکیشن درمانیتو</h1>
                    <p className="text-light">درمانیتو، سامانه هوشمند درمان و سلامت</p>
                    <ul className="btn-group">
                        <li>
                            <Link class="btn btn-primary" to="/">دانلود درمانیتو</Link>
                        </li>
                        <li>
                            <Link class="btn btn-primary-outline" to="/">عضویت داروخانه ها</Link>
                        </li>
                    </ul>
                </Header>
            </div>
            <main>
                <section className="container">

                    {/* About Darmanito */}
                    <AboutCard />

                    {/* Possibilities */}
                    <PossibilitiesCard />
                </section>
                <DownloadBox />
            </main>
            
        </>
    )
}

export default Home
