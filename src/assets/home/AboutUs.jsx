import React from "react";
import CountUp from "react-countup";

const subTitle = "Why Choose Us";
const title = "Become a Merchant";
const desc =
  "Take courses on any device with our app & learn all about business what you want. Just download, install & start learning.";
const btnText = "Apply Now";

const countList = [
  {
    iconName: "icofont-users-alt-4",
    count: 12600,
    text: "Merchants Enrolled",
  },
  {
    iconName: "icofont-graduate-alt",
    count: 30,
    text: "Certified Courses",
  },
  {
    iconName: "icofont-notification",
    count: 100,
    text: "Rewards & Gift Cards",
  },
];

const AboutUs = () => {
  return (
    <section className="instructor-section style-2 padding-tb section-bg-ash">
      <div className="container">
        <div className="section-wrapper">
          <div className="row align-items-center g-4">
            
            {/* RIGHT COLUMN - COUNTS */}
            <div className="col-lg-6 col-12">
              <div className="row g-4 justify-content-center row-sm-3 row-sm-2 row-cols-1">
                {countList.map((val, i) => (
                  <div key={i} className="col">
                    <div className="count-item text-center">
                      <div className="count-inner">
                        <div className="count-icon">
                          <i className={val.iconName}></i>
                        </div>
                        <div className="count-content">
                          <h3 className="count-number">
                            <CountUp end={val.count} duration={3} separator=","/>
                            <span>+</span>
                          </h3>
                          <p>{val.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* LEFT COLUMN - TEXT */}
            <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center text-center">
              <div className="section-header">
                <span className="subtitle d-block mb-2">{subTitle}</span>
                <h2 className="title mb-3">{title}</h2>
                <p className="mb-4">{desc}</p>
                <a href="#" className="lab-btn">
                  <span>{btnText}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
