import Header from "../parts/header";
import Footer from "../parts/footer";
import Link from "next/link";
import "./landing.css"

export default function LandingPage() {
    return (
        <main>
            <Header />
            <section className="landing-content">
                <div className="main-welcome">
                        <div>
                            <div className="titleTextRow">
                                <p className="welcomeText redhat-semibold top-text">No One&nbsp;</p>
                                <p className="welcomeText redhat-bold top-text">Deserves</p>
                            </div>
                            <div className="titleTextRow">
                                <p className="welcomeText bottom-text redhat-semibold">To Be In&nbsp;</p>
                                <p className="welcomeText bottom-text redhat-black">Need.</p>
                            </div>
                        </div>
                        <p className="welcomeDisc redhat-medium">Help provide water for underprivilied people all over the world.</p>
                        <div id="thing2">
                            <Link href="about"><button className="welcome-buttons manrope-semibold learnmore">Learn More</button></Link>
                            <Link href="donate"><button className="welcome-buttons manrope-semibold donate-button">Donate Now</button></Link>
                        </div>
                </div>
                <div className="our-mission">
                    <img className="blankImg" src="images/water-mission.jpg" style={{height: 300, width: 500}} />
                    <div className="misson-text">
                        <h1 id="missionTitle" className="redhat-bold">Our Mission</h1>
                        <p id="normalLandText" className="manrope-regular">About 11% of the world's population lacks access to improved water sources. Helping even one person to access safe drinking water is a step in the right direction. Our plan focuses on aiding small villages in India with inaccessible or contaminated water. We aim to support organizations working in these areas and provide supplies. Donations will fund water purification and essential resources for the people.</p>
                    </div>
                </div>
                <div className="buzzwords">
                    <div className="inner-section">
                        <div className="buzzword-item">
                            <h1 className="buzzword-word redhat-bold">Refined.</h1>
                            <div className="break-line"></div>
                            <h4 className="buzzword-disc special-change manrope-regular">We are always improving on everything (hackathons, website, and our future donation campaigns) in order to help all over!</h4>
                        </div>
                        <div className="buzzword-item">
                            <h1 className="buzzword-word redhat-bold">Organized.</h1>
                            <div className="break-line"></div>
                            <h4 className="buzzword-disc manrope-regular">Fresh Future Foundation has an ever growing team of committed members who want to change the world!</h4>
                        </div>
                        <div className="buzzword-item">
                            <h1 className="buzzword-word redhat-bold">Dedicated.</h1>
                            <div className="break-line"></div>
                            <h4 className="buzzword-disc manrope-regular">We always want to try and provide as much water as possible to underfunded and underdelveloped parts of the world.</h4>
                        </div>
                        <div className="buzzword-item">
                            <h1 className="buzzword-word redhat-bold">Supported.</h1>
                            <div className="break-line"></div>
                            <h4 className="buzzword-disc manrope-regular">A huge special thanks to HackClub for sponsoring our foundation and making our FreshHacks event possbile!</h4>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}