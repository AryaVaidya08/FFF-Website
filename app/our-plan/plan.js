import Footer from "../parts/footer";
import Header from "../parts/header";
import "./plan.css"

export default function PlanPage() {
    return (
        <main>
            <Header /> 
            <section className="plan-content">
                <div className="change-banner">
                    <h1 className="banner-text">How We're Making A Change</h1>
                    <p className="banner-text" id="banner-desc">We plan to donate funds and resources to organizations in the areas we aim to help to facilitate water purification and other necessities for the basic livelihoods of the people.</p>
                </div>
                <div className="our-plan">
                    <h3 className="section-header">Our Plan</h3>
                    <p style={{paddingLeft: 200, paddingRight: 200}}>Our plan is to aid poorer areas, specifically small villages in India with more inaccessible or contaminated water. We plan to support companies and organizations, which focus on helping these areas, as well as donating supplies.</p>
                </div>
                <h1 id="deserves-text">No one deserves to be in need.</h1>
                <div className="partners">
                    <h3 className="section-header">Who We Partner With</h3>
                    <div className="partnerImages">
                        <img className="blankImg" style={{height: 200, width: 200}} />
                        <img className="blankImg middleImg" style={{height: 200, width: 200}} />
                        <img className="blankImg" style={{height: 200, width: 200}} />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}