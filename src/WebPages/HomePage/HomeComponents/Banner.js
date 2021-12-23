import React from "react";
import { Link } from "react-router-dom";
import "./HomeComponents.css";
import bannerimg from '../../../images/Header.png';
const Banner = () => {
  return (

    <section className="mt-5">
      <div className="container my-5">
        <div class="row d-flex align-items-center justify-content-center text-white">
          <div class="col-lg-6 pb-4" >
            <h1 class="fw-bolder fs-1 pb-3 bfcolor" >Different Spice For A Different Taste</h1>
            <h6 class="text-secondary mb-2">We get what you love, from your favourite restaurants. So, order your food & enjoy.</h6>
            <br />
            <Link to="/category">
              <button type="button" class="btn-color text-white fw-bold py-2 px-5" > ORDER NOW
              </button>
            </Link>
          </div>
          <div class="col-lg-6 text-lg-center">
            <img class="img-fluid" src={bannerimg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
