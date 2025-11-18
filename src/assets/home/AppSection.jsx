import React from "react";
import { Link } from "react-router-dom";

// Import images properly for React
import app01 from "../../assets/images/app/01.jpg";
import app02 from "../../assets/images/app/02.jpg";

const btnText = "Sign up for Free";
const title = "Learn Anytime, Anywhere";
const desc =
  "Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn";

const AppSection = () => {
  return (
    <div className="app-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <Link to="/sign-up" className="lab-btn text-black">
            {btnText}
          </Link>

          <h2 className="title">{title}</h2>
          <p>{desc}</p>
        </div>

        <div className="section-wrapper">
          <ul className="lab-ul app-download-list">
            <li>
              <a href="#">
                <img src={app01} alt="Download on App Store" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={app02} alt="Get it on Google Play" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
