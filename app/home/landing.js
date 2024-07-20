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
                            <p className="welcomeText redhat-bold top-text">Fresh Future</p>
                            <p className="welcomeText redhat-bold">Foundation</p>
                        </div>
                        <div id="thing2">
                            <Link href="about"><button className="welcome-buttons manrope-semibold learnmore">Learn More</button></Link>
                            <Link href="donate"><button className="welcome-buttons manrope-semibold donate-button">Donate Now</button></Link>
                        </div>
                    </div>
                    <img className="blankImg" style={{height: 350, width: 500}} />
                </div>
                <div className="our-mission">
                    <img className="blankImg" style={{height: 250, width: 500}} />
                    <div className="misson-text">
                        <h1 id="missionTitle" className="redhat-semibold">Our Mission</h1>
                        <p id="normalLandText" className="manrope-regular">About 11% of the world's total population doesn't have access to improved water sources. If we can help even just one person to have better access to safe drinking water, that's already a step in the right direction, and we only need to keep going.</p>
                    </div>
                </div>
                <div className="buzzwords">
                    <div className="inner-section">
                        <div className="buzzword-item">
                            <h1 className="buzzword-word redhat-bold">Refined.</h1>
                            <div className="break-line"></div>
                            <h4 className="buzzword-disc manrope-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis architecto quos repudiandae. Quam, quia! Corporis repellendus placeat aliquid minus nemo.</h4>
                            <img className="blankImg buzzImg"/>
                        </div>
                        <div className="buzzword-item">
                            <h1 className="buzzword-word redhat-bold">Organized.</h1>
                            <div className="break-line"></div>
                            <h4 className="buzzword-disc manrope-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis architecto quos repudiandae. Quam, quia! Corporis repellendus placeat aliquid minus nemo.</h4>
                            <img className="blankImg buzzImg"/>
                        </div>
                        <div className="buzzword-item">
                            <h1 className="buzzword-word redhat-bold">Satisfied.</h1>
                            <div className="break-line"></div>
                            <h4 className="buzzword-disc manrope-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis architecto quos repudiandae. Quam, quia! Corporis repellendus placeat aliquid minus nemo.</h4>
                            <img className="blankImg buzzImg"/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}