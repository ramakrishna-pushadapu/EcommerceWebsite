import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "./CheckOutPage.css";

const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");

  // handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // navigate after order
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  //  Validation + order confirm
  const handleOrderConfirm = (e) => {
    e.preventDefault();

    // Get all input values inside modal
    const inputs = document.querySelectorAll(".modal-content .form-control");
    let allFilled = true;

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        allFilled = false;
      }
    });

    // Check if all fields are filled
    if (!allFilled) {
      alert("⚠️ Please fill all payment details before placing your order!");
      return;
    }

    // If all fields are filled
    alert("✅ Your Order has been placed successfully!");
    localStorage.removeItem("cart");
    navigate(from, { replace: true });
  };

  return (
    <div className="modalCard text-center">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        Proceed to Checkout
      </Button>

      <Modal show={show} onHide={handleClose} centered animation={false}>
        <div className="modal-dialog">
          <div className="modal-content p-4">
            <h5 className="mb-3 text-left">Select Your Payment Method</h5>

            {/* Tabs */}
            <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                  id="visa-tab"
                  role="tab"
                  aria-controls="visa"
                  aria-selected={activeTab === "visa"}
                  onClick={() => handleTabChange("visa")}
                >
                  <img
                    src="https://www.pngitem.com/pimgs/m/5-55251_transparent-visa-mastercard-png-graphic-design-png-download.png"
                    alt="Visa"
                    width="80"
                  />
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}
                  id="paypal-tab"
                  role="tab"
                  aria-controls="paypal"
                  aria-selected={activeTab === "paypal"}
                  onClick={() => handleTabChange("paypal")}
                >
                  <img
                    src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
                    alt="PayPal"
                    width="80"
                  />
                </button>
              </li>
            </ul>

            {/* Tab Content */}
            <div className="tab-content mt-4" id="myTabContent">
              {/* VISA TAB */}
              <div
                className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                id="visa"
                role="tabpanel"
                aria-labelledby="visa-tab"
              >
                <div className="mt-3">
                  <h5 className="text-center">Credit Card</h5>
                  <div className="form mt-3">
                    <div className="inputbox mb-3">
                      <input type="text" className="form-control" required />
                      <span>Cardholder Name</span>
                    </div>

                    <div className="inputbox mb-3">
                      <input type="text" className="form-control" required />
                      <span>Card Number</span>
                    </div>

                    <div className="d-flex gap-2">
                      <div className="inputbox flex-fill">
                        <input type="text" className="form-control" required />
                        <span>Expiration Date</span>
                      </div>
                      <div className="inputbox flex-fill">
                        <input type="text" className="form-control" required />
                        <span>CVV</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="btn btn-success w-100"
                        onClick={handleOrderConfirm}
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* PAYPAL TAB */}
              <div
                className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`}
                id="paypal"
                role="tabpanel"
                aria-labelledby="paypal-tab"
              >
                <div className="mt-3">
                  <h5 className="text-center">PayPal Account Info</h5>
                  <div className="form mt-3">
                    <div className="inputbox mb-3">
                      <input type="email" className="form-control" required />
                      <span>Email Address</span>
                    </div>

                    <div className="inputbox mb-3">
                      <input type="text" className="form-control" required />
                      <span>Your Name</span>
                    </div>

                    <div className="inputbox mb-3">
                      <input type="text" className="form-control" required />
                      <span>Extra Info</span>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="btn btn-success w-100"
                        onClick={handleOrderConfirm}
                      >
                        Add PayPal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-4 text-muted small">
              <em>Payment Disclaimer:</em> In no event shall payment or partial payment by Owner for
              any material or service constitute approval or acceptance of defective or incomplete
              work.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckOutPage;
