import React from "react";
import "../css/style.css";
import connect from "../../assets/connect.png";
import StarfieldAnimation from "react-starfield-animation";
import franchise from "../../assets/franchise.png";
import tri from "../../assets/velas2.gif";

function Hero() {
  return (
    <>
      <div className="hero-main">
        <StarfieldAnimation
          style={{
            position: "absolute",
            zIndex:"20",
            width: "100vw",
            height: "100vh",
            top:"13vh"
          }}
        />
        {/* <div className="ring-container"><Rings/></div> */}
        <h2>
          EMPOWERING ENTREPRENUERS
          <br /> <span>ONE FRANCHISE</span>
          <br /> AT A TIME
        </h2>
      </div>
      <div className="hero-sub web">
        <br />
        <br />
        <br />
        <br />
        <h3>Learn More about us</h3>
        <div className="hero-sub-flex" id="about">
          <div className="sub-container">
            <p>
              IFS’s is an online portal designed to connect franchisees,
              franchisors and Governments in a seamless and efficient manner.
            </p>
          </div>
          <div className="sub-container">
            <img src={franchise} alt="trangular svg" />
          </div>
        </div>
        <div className="hero-sub-flex">
          <div className="sub-container">
            <img src={tri} alt="trangular svg" />
          </div>
          <div className="sub-container">
            <p>
              IFS is built on Velas Blockchain to provide Secure Data
              Management, Immutable Record Keeping, Streamlined Processes, and
              Automated Compliance.
            </p>
          </div>
        </div>
        <div className="hero-sub-flex">
          <div className="sub-container">
            <p>
              Our technology provides a centralized location for
              franchise-related information, including registration and
              compliance requirements, as well as a directory of franchise
              opportunities.
            </p>
          </div>
          <div className="sub-container">
            <img src={connect} alt="connect dspl" />
          </div>
        </div>
      </div>
      <div className="hero-sub mobile">
        <br />
        <br />
        <br />
        <br />
        <h3>Learn More about us</h3>
        <div className="hero-sub-flex" id="about-mobile">
          <div className="sub-container">
            <p>
              IFS’s is an online portal designed to connect franchisees,
              franchisors and Governments in a seamless and efficient manner.
            </p>
          </div>
          <div className="sub-container">
            <img src={franchise} alt="trangular svg" />
          </div>
        </div>
        <div className="hero-sub-flex">
          <div className="sub-container">
            <p>
              IFS is built on Velas Blockchain to provide Secure Data
              Management, Immutable Record Keeping, Streamlined Processes, and
              Automated Compliance.
            </p>
          </div>
          <div className="sub-container">
            <img src={tri} alt="trangular svg" className="spano" />
          </div>
        </div>
        <div className="hero-sub-flex">
          <div className="sub-container">
            <p>
              Our technology provides a centralized location for
              franchise-related information, including registration and
              compliance requirements, as well as a directory of franchise
              opportunities.
            </p>
          </div>
          <div className="sub-container">
            <img src={connect} alt="connect dspl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
