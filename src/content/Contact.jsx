import React from "react";
import PageHeader from "../assets/components/PageHeader";
import GoogleMap from "../assets/components/GoogleMap";
import "../contact/Contact.css";

const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";
const conSubTitle = "Get in touch with Contact us";
const conTitle =
  "Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";

const contactList = [
  {
    imgUrl: "src/assets/images/icon/01.png",
    imgAlt: "contact icon",
    title: "Office Address",
    desc: "1201 park street, Fifth Avenue",
  },
  {
    imgUrl: "src/assets/images/icon/02.png",
    imgAlt: "contact icon",
    title: "Phone number",
    desc: "+22698 745 632,02 982 745",
  },
  {
    imgUrl: "src/assets/images/icon/03.png",
    imgAlt: "contact icon",
    title: "Send email",
    desc: "admin@shopcart.com",
  },
  {
    imgUrl: "src/assets/images/icon/04.png",
    imgAlt: "contact icon",
    title: "Our website",
    desc: "www.shopcart.com",
  },
];

const Contact = () => {
  return (
    <div>
      <PageHeader title="Get In Touch With Us" curPage="Contact Us" />

      {/* Map & Contact Info Section */}
      <div className="contact-page section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">{subTitle}</span>
            <h2 className="section-title">{title}</h2>
          </div>

          <div className="section-body">
            <div className="row flex-row-reverse align-items-center">
              
              {/* Contact Info */}
              <div className="col-xl-4 col-lg-5 col-12">
                <div className="contact-info">
                  {contactList.map((val, i) => (
                    <div key={i} className="contact-card">
                      <div className="contact-icon">
                        <img src={val.imgUrl} alt={val.imgAlt} />
                      </div>
                      <div className="contact-details">
                        <h6 className="contact-title">{val.title}</h6>
                        <p className="contact-desc">{val.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Map */}
              <div className="col-xl-8 col-lg-7 col-12">
                <div className="map-wrapper">
                  <GoogleMap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">{conSubTitle}</span>
            <h2 className="section-title">{conTitle}</h2>
          </div>

          <div className="form-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" name="name" id="name" placeholder="Your Name *" />
              </div>
              <div className="form-group">
                <input type="email" name="email" id="email" placeholder="Your Email *" />
              </div>
              <div className="form-group">
                <input type="number" name="number" id="number" placeholder="Phone Number *" />
              </div>
              <div className="form-group">
                <input type="text" name="subject" id="subject" placeholder="Subject" />
              </div>
              <div className="form-group full-width">
                <textarea name="message" id="message" rows="8" placeholder="Your Message"></textarea>
              </div>
              <div className=" full-width text-center">
                <button className="submit-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
