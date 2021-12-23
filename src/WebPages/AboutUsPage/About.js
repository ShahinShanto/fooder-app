import React from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Footer from "../../SharedComponents/Footer/Footer";
import NavigationBar from "../../SharedComponents/NavigationBar/NavigationBar";
import './About.css';
import AboutUSPic from '../../images/about.png';
import AboutUSPic2 from '../../images/1.png';

const About = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div >
        <section className="container-fluid mb-5 radious pb-5">
          <div className="bg container">
            <div className="row d-flex align-items-center d-flex justify-content-center text-color my-3">
              <div className="col-lg-6 align-items-center justify-content-center">
                <img className="img-fluid img2" src={AboutUSPic} width="500" alt="" />
              </div>
              <div className="col-lg-6 ">
                <h1 className=" mt-3 bff-color" >Why We Are The Best?</h1>
                <p className=" text-secondary fw-light">A, blandit euismod ullamcorper vestibulum enim habitasse. Ultrices tincidunt scelerisque elit enim. A neque malesuada in tortor eget justo mauris nec dolor. Consequat risus vitae, ac ac et preparation. He wanted to serve burgers, fries and beverages that tasted .
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className=" my-5 bg-light pb-5">
          <div className=" bg container mt-5">
            <div className="row d-flex align-items-center d-flex justify-content-center text-color">
              <div className="col-lg-6">
                <h1 className="bff-color" >We Have Excellent Of Quality Food</h1>
                <p className="py-4 text-secondary fw-light">A, blandit euismod ullamcorper vestibulum enim habitasse. Ultrices tincidunt scelerisque elit enim. A neque malesuada in tortor eget justo mauris nec dolor. Consequat risus vitae, ac ac et preparation. He wanted to serve burgers, fries and beverages that tasted .
                </p>
              </div>
              <div className="col-lg-6 align-items-center justify-content-center">
                <img className="img-fluid img2" src={AboutUSPic2} width="700" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="banner-area my-5">
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (

              <div className="d-flex flex-column flex-lg-row content ">
                <div className="col-lg-3 col-12 d-flex  mt-5 pt-4 ">
                  <div className="text-center ">
                    <i class="fas fa-box-open icon"></i>
                    <div className="counter">
                      <h1 className="text-followers counter text-light">{isVisible ? <CountUp end={400} duration={1} /> : null}+</h1>
                    </div>
                    <h4 className="text-followers2 text-light">Orders Regular</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-12 d-flex mt-5 pt-4">
                  <div className="text-center ">
                    <i class="fas fa-shipping-fast icon"></i>
                    <h1 className="text-followers counter text-light" >{isVisible ? <CountUp end={30} duration={1} /> : null} </h1>
                    <h4 className="text-followers2 fcolor text-light">Mins Fast Delivery</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-12 d-flex mt-5 pt-4">
                  <div className="text-center">
                    <i className="fas fa-smile-beam icon"></i>
                    <h1 className="text-followers counter text-light ">{isVisible ? <CountUp end={12426} duration={1} /> : null}</h1>
                    <h4 className="text-followers2 text-light">Customers Reviews</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-12 d-flex mt-5 pt-4">
                  <div className="text-center">
                    <i class="fas fa-utensils icon"></i>
                    <h1 className="text-followers  counter text-light" >{isVisible ? <CountUp end={50} duration={1} /> : null}+</h1>
                    <h4 className="text-followers2 text-light">Restaurants</h4>
                  </div>
                </div>
              </div>

            )}
          </VisibilitySensor>
          <br />
          <br />
          <br />
        </section>
      </div >
      <Footer></Footer>
    </>
  );
};

export default About;
