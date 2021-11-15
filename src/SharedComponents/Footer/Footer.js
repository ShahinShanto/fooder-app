import React from "react";
import "./Footer.css";
import logo from '../../images/logo.png';
import masterCard from "../../images/paymentGateWay/payment-master-card.png";
import visaCard from "../../images/paymentGateWay/payment-visa-card.png";
import skrillCard from "../../images/paymentGateWay/payment-skrill-card.png";
import stripeCard from "../../images/paymentGateWay/payment-stripe-card.png";
import discoverCard from "../../images/paymentGateWay/payment-discover-card.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-footer mt-5">
        <div className="row align-items-center">
          <div className="g-5 mb-2 ">
            <div className="d-flex flex-column flex-lg-row g-5 border-bottom ">
              <div className="col-lg-3 col-12 px-4 text-white mt-2">
                <img className="img-fluid mb-2" src={logo} alt="" style={{ width: '10rem' }} />
                <p className="fw-light">MotoShop is an bike selling website. Here you can find bike of many brands.   </p>
              </div>
              <div className="col m-2">
                <h2 className="mb-4 text-white">We Accepts</h2>
                <div className="g-4">
                  <img src={masterCard} alt="" className="img-fluid me-2 my-2" />
                  <img src={visaCard} alt="" className="img-fluid me-2 my-2" />
                  <img src={skrillCard} alt="" className="img-fluid me-2 my-2" />
                  <img src={stripeCard} alt="" className="img-fluid me-2 my-2" />
                  <img src={discoverCard} alt="" className="img-fluid my-2" />
                </div>
              </div>
              <div className="col-lg-3 col-12 px-3 text-white my-2">
                <h2>Social Media</h2>
                <Link className="fw-light nav-link active p-2  text-white" aria-current="page" to="#"> <i className="fab fa-facebook-square"></i> Facebook</Link>
                <Link className="fw-light nav-link active p-2  text-white" aria-current="page" to="#"><i className="fab fa-twitter-square"></i> Twitter</Link>
                <Link className="fw-light nav-link active p-2 text-white" aria-current="page" to="#"><i className="fab fa-whatsapp-square"></i> Whats App</Link>
                <Link className="fw-light nav-link active p-2 text-white" aria-current="page" to="#"><i className="fab fa-linkedin"></i> Linkedin</Link>
              </div>
              <div className="col-lg-3 col-12 px-3 text-white my-2">
                <h2>Find Us</h2>
                <p className="fw-light"><i className="fas fa-map-marker-alt"></i> 143 Gordon Terrace Embarrassing NG33 0ZT United Kingdom</p>
                <p className="fw-light"><i className="fas fa-envelope"></i> info@bikeshop.com</p>
                <p className="fw-light"><i className="fas fa-phone-square-alt"></i> +880 1558920727</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-white fw-normal"> <i class="far fa-copyright"></i> All rights reserved by Shahin</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
