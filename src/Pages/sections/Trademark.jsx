import React from "react";
import "../css/trademark.css";
import auth from "../../assets/fingerprint.png";
import cards from "../../assets/cards.png";
import tm from "../../assets/tm.png";
import Folder from "../../assets/folderAsset.png";
import coins from "../../assets/coins.png"

function Trademark() {
  return (
    <>
      <div className="trademark title" id="services">
        <div className="title-ban">
          <h3>Here's what we do</h3>
          <p style={{fontSize:"20px"}}>
            We are simplifying the franchising process by making it easy,
            efficient and transparent.
          </p>
        </div>
        <div className="trademark-flex">
          <div className="trademark-sub-container">
            <div className="trademark-sub-text">
              <h2>Tax Filing</h2>
              <p>
                The IFS Portal  will have a built-in tax filing system that
                allows franchisees and franchiseors to easily file their taxes
                and stay compliant with government regulations.
              </p>
            </div>
            <div className="trademark-sub-image">
              <img src={cards} alt="cards display" />
            </div>
          </div>
          <div className="trademark-sub-container">
            <div className="trademark-sub-text">
              <h2>Trademark Infringement and Protection</h2>
              <p>
                The portal will include tools and resources to help franchisees
                and franchisors protect their trademarks and intellectual
                property from infringement.
              </p>
            </div>
            <div className="trademark-sub-image">
              <img src={tm} alt="tm logo" />
            </div>
          </div>
        </div>
        <div className="trademark-flex">
          <div className="trademark-sub-container">
            <div className="trademark-sub-text">
              <h2>Proof of Funds</h2>
              <p>
                The portal will include a feature that allows franchisees to
                easily verify their financials and show proof of funds to
                franchisors. This will help streamline the application and
                approval process for franchise opportunities.
              </p>
            </div>
            <div className="trademark-sub-image">
              <img src={coins} alt="coins illustration"/>
            </div>
          </div>
          <div className="trademark-sub-container">
            <div className="trademark-sub-text">
              <h2>Identity Verification</h2>
              <p>
                The portal will include a secure, user-friendly identity
                verification system to ensure that all parties using the
                platform are who they claim to be. This will help to prevent
                fraud and ensure the integrity of the platform.
              </p>
            </div>
            <div className="trademark-sub-image">
              <img src={auth} alt="fingerprint icon" />
            </div>
          </div>
        </div>
      </div>
      <div className=" spanning">
          <div className="trademark-sub-container">
            <div className="trademark-sub-text">
              <h2>Legal Document Processing</h2>
              <p>
                The portal will include a feature that allows franchisees and
                franchisors to process and receive legal documentation through
                the platform, such as franchise agreements, disclosure documents
                and compliance documents. This will help to streamline the legal
                process and reduce the time and cost associated with traditional
                paper-based methods.
              </p>
            </div>
            <div className="trademark-sub-image">
              <img src={Folder} alt="folder assetting" />
            </div>
          </div>
        </div>
    </>
  );
}

export default Trademark;
