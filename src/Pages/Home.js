import React from 'react';
import styles from './Home.module.css'
import bitmap from '../Assets/Bitmap.svg'
import wave from '../Assets/blackbg.svg'
import bgblue from '../Assets/bgblue.svg'
import ovalBlue from '../Assets/ovalBlue.svg'
import Navbar from '../Components/Navbar/Navbar';
import rightWave from '../Assets/rightWave.svg'
import Testimonial from '../Components/Testimonial/Testimonial';
import HelpsnTips from '../Components/HelpsnTips/HelpsnTips';
import path3 from '../Assets/path3.svg'
import path2 from '../Assets/Path2.svg'
import path4 from '../Assets/path4.svg'
import Footer from '../Components/Footer/Footer';

function Home() {
    return (
        <>
            <Navbar />
            <div className={styles.mainContainer}>
                <div className={styles.upperContainer} >
                    <section className={styles.upperSection} style={{ backgroundImage: `url(${wave})` }}>
                        <img src={bgblue} className={styles.bgblue} alt="bgblue" />
                        {/* <img src={wave} className={styles.wave} alt="wave" /> */}
                        <div className={styles.welcomeBoard}>
                            <h1>WEEKEND FROM HOME</h1>
                            <p><i>Stay active with the little workout.</i></p>
                        </div>
                        <img src={ovalBlue} className={styles.ovalBlue} alt="astro" />
                        <div className={styles.astroContainer}>
                            <div className={styles.astro}>
                                <div className={styles.astroImage}>
                                    <img src={bitmap} alt="astro" />
                                </div>
                                <button className={styles.astroButton}>Let's Go</button>
                            </div>
                        </div>
                        <img src={path2} className={styles.path2} alt="path2" />
                    </section>
                    <section className={styles.description}>
                        <div className={styles.imgSection2bg}>
                            <img src={bitmap} className={styles.astroSection2} alt="astros2" />
                            <img src={rightWave} className={styles.rightWave} alt="rightWave" />

                        </div>
                        <div className={styles.descriptionText} style={{ cursor: 'pointer' }}>
                            <span style={{ color: "#0B24FB" }}>Deffinition;</span> a practice or exercise to test or improve one's fitness for athletic competition,
                            ability, or performance to exhaust (something, such as a mine) by working to devise,
                            arrange, or achieve by resolving difficulties.
                            Merriam-Webster.com Dictionary.
                            <p className={styles.quotesBy}>-weekend team</p>
                        </div>
                    </section>
                </div>
                <div className={styles.lowerContainer}>
                    <section className={styles.lowerSection}>
                        <img src={ovalBlue} className={styles.ovalBlue2} alt="ovalBlue" />
                        <h2 className={styles.lowerSectionHeading} style={{ color: 'white' }}>Testimonial</h2>
                        <div className={styles.testiContainer}>
                            < Testimonial />
                        </div>
                    </section>
                    <section className={styles.lowerSection2}>
                        <h2 className={styles.lowerSectionHeading2} style={{ color: 'white' }}>POV</h2>
                        <div className={styles.povContainer}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                        <h2 className={styles.lowerSectionHeading3} style={{ color: 'white' }}>Resource</h2>
                        <div className={styles.resourceContainer}>
                            These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</div>
                    </section>
                    <section className={styles.lowerSection3}>
                        <h2 className={styles.lowerSectionHeading4} style={{ color: 'white' }}>Helps & Tips</h2>
                        <img className={styles.path} src={path3} alt="helpsnTips" />
                        <div className={styles.helpsContainer}>
                            <HelpsnTips />
                        </div>
                    </section>
                    <div className={styles.yourSetWrapper}>
                        <img src={path4} alt="path4" className={styles.path4}/>
                        <img src={bitmap} alt="bitmap" className={styles.bitmap4}/>
                        <h2 className={styles.lowerSectionHeading5} style={{ color: 'white' }}>You'ar all set.</h2>
                        <div className={styles.yourSetContainer}>
                            The wise man therefore always holds in these matters to this principle of selection.
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Home;