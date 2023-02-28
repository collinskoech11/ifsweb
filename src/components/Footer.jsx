import React from "react";
import {Link} from "react-router-dom"
import "./css/footer.css";
import ifsLogo from "../assets/ifsLogo.png";
import twitter from "../assets/twitter.png"
import linkedin from "../assets/linkedin.png"

function Footer() {
  const handleClickScrollServices = () => {
    const element = document.getElementById('services');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClickScrollAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClickScrollAboutMobile = () => {
    const element = document.getElementById('about-mobile');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClickScrollTeam = () => {
    const element = document.getElementById('team');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className="main-footer-container" style={{borderTop:"1px solid #ADC8EA"}}>
        <div className="footer-text">
          <img src={ifsLogo} alt="footer titling" />
          <br/><br/><br/>
          <p>
            Our organisation takes pride in its collaborative approach and
            constant<br/> devotion to its clients. We collaborate with you every step
            of the process,<br/> giving exceptional assistance and support. You can
            be certain that your<br/> franchise journey will be a success with us on
            your side.
          </p>
        </div>
        <div className="footer-links">
          <h3>Company</h3><br/><br/><br/>
          <h3><Link>Contact us</Link></h3><br/>
          <h3 className="web"><Link onClick={handleClickScrollAbout}>About Us</Link></h3><br/>
          <h3 className="mobile"><Link onClick={handleClickScrollAboutMobile}>About Us</Link></h3><br/>
          <h3><Link onClick={handleClickScrollServices}>Services</Link></h3><br/>
          <h3><Link onClick={handleClickScrollTeam}>Team</Link></h3><br/>
          <div className="footer-png">
            <img src={twitter} alt="twitter png"/>
            <img src={linkedin} alt="linkedin png"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
