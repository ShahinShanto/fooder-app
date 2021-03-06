import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../images/logo-01.png';

const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-footer mt-5">
        <div className="row align-items-center">
          <div className="g-5 mb-2 ">
            <div className="d-flex flex-column flex-lg-row g-5 border-bottom ">
              <div className="col-lg-3 col-12 px-4 text-white ">

                <img className="img-fluid mt-lg-3 " src={logo} alt="" width="170" />
                <br />
                <p className="fw-light">A healthy & trusted online food ordering platform for you. Order food from us & enjoy.</p>
              </div>
              <div className="col-lg-3 col-12 px-3 text-white my-2">
                <h2>Quick Links</h2>
                <Link to="/home" className="nav-link active p-2  text-white fw-light" aria-current="page"><i className="fas fa-home"></i> Home</Link>
                <Link to="/specialist" className="fw-light nav-link active p-2  text-white" aria-current="page" ><i class="fas fa-list"></i> Categories</Link>
                <Link to="/department" className="fw-light nav-link active p-2  text-white" aria-current="page" ><i class="fas fa-chevron-circle-down"></i> Menu</Link>
                <Link to="/aboutus" className="fw-light nav-link active p-2  text-white" aria-current="page" ><i className="far fa-question-circle"></i> About Us</Link>
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
                <p className="fw-light"><i className="fas fa-envelope"></i> info@fooder.com</p>
                <p className="fw-light"><i className="fas fa-phone-square-alt"></i> +1800 326 3264</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-white fw-normal"><i class="far fa-copyright"></i> All rights reserved</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;