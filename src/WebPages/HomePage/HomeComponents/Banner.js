import React from "react";
import "./HomeComponents.css";
const Banner = () => {
  return (

    <section className="" >
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item py-5 cover active">

            <div className="text-center caption py-2 my-5 container">
              <div className=" my-5">
                <h3>AN EXITING RIDE</h3>
                <h5 className=" h5color">Where Adventure Begins</h5>
                <button className="btn bf-color px-4 py-2 my-5 fs-bold">Explore More</button>
              </div>

              <div className="container-fluid col-lg-6">
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn bf-color" type="submit">Search</button>
                </form>
              </div>

            </div>
          </div>
          <div className="carousel-item cover2 py-5">
            <div className="text-center caption py-2 my-5 container">
              <div className=" my-5">
                <h3>PUSH YOUR LIMITS</h3>
                <h5 className=" h5color">Test Your Speed</h5>
                <button className="btn bf-color px-4 py-2 my-5 fs-bold">Explore More</button>
              </div>

              <div className="container-fluid col-lg-6">
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn bf-color" type="submit">Search</button>
                </form>
              </div>
            </div>
          </div>
          <div className="carousel-item cover3 py-5">
            <div className="text-center caption py-2  my-5 container">
              <div className=" my-5">
                <h3 >JUST FEEL THE AIR</h3>
                <h5 className="h5color">With Your Speed</h5>
                <button className="btn bf-color px-4 py-2 my-5 fs-bold">Explore More</button>
              </div>

              <div className="container-fluid col-lg-6">
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn bf-color" type="submit">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Banner;
