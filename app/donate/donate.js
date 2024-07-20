import { urlToUrlWithoutFlightMarker } from "next/dist/client/components/app-router";
import Footer from "../parts/footer";
import Header from "../parts/header";
import "./donate.css" 

export default function DonatePage() {
    return (
        <main>
            <Header />
            <section className="donate-content"> 
                <div className="donate-title-div">
                    <div className="donate-div">
                        <p className="redhat-bold donate-title">Donate</p>
                        <p className="manrope-medium title-disc">Make a donation (monetary or physical) to help us create healthier lives. We greatly appreciate any and all donations! All proceeds will be sent to areas we are working in. </p>
                    </div>
                    <img className="" src="/images/water-bottles.jpg" style={{height: 300, width: 500, borderRadius: 15}}></img>
                </div>
                <div className="donation-div">
                    <h1 className="methods-title redhat-bold">Donate Methods</h1>
                    <div className="donation-methods">
                        <div className="donation-method">
                            <h2 className="method-title manrope-bold">Monetary Donations</h2>
                            <p className="method-disc redhat-regular">Any of your monetary donations will be put to support development of wells and desalination processes to aid in giving access to water.</p>
                            <button className="method-box top-box">
                                <img className="method-icon" src="images/paypal-logo.png" style={{height: 70, width: 70}}></img>
                                <div className="lineBreak"></div>
                                <div className="method-details">
                                    <h1 className="method-name redhat-semibold ">Paypal</h1>
                                    <p className="method-directions manrope-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odit?</p>
                                </div>
                            </button>
                            <button className="method-box">
                                <img className="method-icon" src="images/venmo-logo.png" style={{height: 70, width: 70}}></img>
                                <div className="lineBreak"></div>
                                <div className="method-details">
                                    <h1 className="method-name redhat-semibold">Venmo</h1>
                                    <p className="method-directions manrope-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odit?</p>
                                </div>
                            </button>
                        </div>
                        <div className="donation-method">
                            <h2 className="method-title manrope-bold">Physical Donations</h2>
                            <p className="method-disc redhat-regular">Any physical items donated to us will be distributed to others in or near the regions we are working in.</p>
                            <button className="method-box top-box">
                                <img className="method-icon" src="images/shipping-logo.png" style={{height: 70, width: 70}}></img>
                                <div className="lineBreak"></div>
                                <div className="method-details">
                                    <h1 className="method-name redhat-semibold">Shipping</h1>
                                    <p className="method-directions manrope-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odit?</p>
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </main>
    );
}