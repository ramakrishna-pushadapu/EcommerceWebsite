import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../images/clients/bg.png";

const title = "More Than 60,000 Customers";

const desc =
  "Buy products on any device with our app & enjoy your time the way you want. Just download, install, and start shopping.";

const clientsList = [
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "client avatar",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "client avatar",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "client avatar",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "client avatar",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "client avatar",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "client avatar",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "client avatar",
    text: "Join with Us",
  },
];

const LocationSprade = () => {
  return (
    <div className="clients-section style-2 padding-tb" >
      <div className="container">
        {/* === Section Header === */}
        <div className="section-header text-center">
          <h2 className="title">{title}</h2>
          <p>{desc}</p>
        </div>

        {/* === Clients Map Section === */}
        <div className="section-wrapper">
          <div className="clients">
            {clientsList.map((val, i) => (
              <div key={i} className="client-list">
                <Link to="/sign-up" className="client-content">
                  <span>{val.text}</span>
                </Link>

                <div className="client-thumb">
                  <img
                    src={val.imgUrl}
                    alt={val.imgAlt}
                    className="img-fluid"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSprade;
