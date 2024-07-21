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
                    <div className="thingy">
                        <div>
                            <p className="welcomeText redhat-bold top-text">No One Wants&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p className="welcomeText bottom-text redhat-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To Be In Need.</p>
                        </div>
                        <div id="thing2">
                            <Link href="about"><button className="welcome-buttons manrope-semibold learnmore">Learn More</button></Link>
                            <Link href="donate"><button className="welcome-buttons manrope-semibold donate-button">Donate Now</button></Link>
                        </div>
                    </div>
                </div>
                <div className="our-mission">
                    <img className="blankImg" src="images/water-mission.jpg" style={{height: 300, width: 500}} />
                    <div className="misson-text">
                        <h1 id="missionTitle" className="redhat-semibold">Our Mission</h1>
                        <p id="normalLandText" className="manrope-regular">About 11% of the world's total population doesn't have access to improved water sources. If we can help even just one person to have better access to safe drinking water, that's already a step in the right direction, and we only need to keep going. Our plan is to aid poorer areas, specifically small villages in India with more inaccessible or contaminated water. We also hope to support companies and organizations, which focus on helping these areas, as well as donating supplies. Funds and resources donated to us will be sent to various organizations in the areas we aim to help to facilitate water purification and other necessities for the basic livelihoods of the people.</p>
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