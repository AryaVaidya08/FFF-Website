import "./footer.css"
import Link from "next/link";
import "../styles/fonts.css"

export default function Footer() {
    return (
        <footer className="footer">
          <div className="mainText">
            <p id="titleText" className="redhat-semibold">Fresh Future Foundation</p>
            <div id="contactInfo">
                <a target="_blank" href="https://www.linkedin.com/company/fresh-future-foundation/"><button className="footer-contact-img linkedin" /></a>
                <a target="_blank" href="mailto: freshfuturefoundations@gmail.com"><button className="footer-contact-img mail" /></a>
                <a target="_blank" href="https://www.instagram.com/freshfuturefoundation/"><button className="footer-contact-img insta" /></a>
                <a target="_blank" href="https://discord.gg/WwCHep9FsB"><button className="footer-contact-img discord" /></a>
            </div>
            <p id="description" className="redhat-light">Fresh Future Foundation is a 501(c)(3) organization with EIN 81-1543325.</p>
          </div>
          <div className="pages">
            <div className="pageColumn">
              <Link href="home"><button className="pageLink redhat-regular">Home</button></Link>
              <Link href="about"><button className="pageLink redhat-regular middlePageLink">About Us</button></Link>
              <Link href="donate"><button className="pageLink redhat-regular">Donate</button></Link>
            </div>
            <div className="pageColumn">
              <Link href="our-plan"><button className="pageLink redhat-regular">Our Plan</button></Link>
              <Link href="join"><button className="pageLink redhat-regular middlePageLink">Join Us</button></Link>
              <a target="_blank" href="https://fresh-hacks.devpost.com/"><button className="pageLink redhat-regular">FreshHacks</button></a>
            </div>
          </div>
        </footer>
    );
}