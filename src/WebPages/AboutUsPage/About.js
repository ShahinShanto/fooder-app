import React from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Footer from "../../SharedComponents/Footer/Footer";
import NavigationBar from "../../SharedComponents/NavigationBar/NavigationBar";
import './About.css';
import faq from '../../images/faq.png';
import brand1 from '../../images/brands/aprilia.webp';
import brand2 from '../../images/brands/bajaj.webp';
import brand3 from '../../images/brands/hero.webp';
import brand4 from '../../images/brands/honda.webp';
import brand5 from '../../images/brands/kawasaki.webp';
import brand6 from '../../images/brands/keeway.webp';
import brand7 from '../../images/brands/ktm.webp';
import brand8 from '../../images/brands/suzuki-1.webp';
import brand9 from '../../images/brands/tvs.webp';
import brand10 from '../../images/brands/vespa.webp';
import brand11 from '../../images/brands/yamaha-logo-1.webp';
import brand12 from '../../images/brands/znen.webp';

const About = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="container-fluid mb-5 radious">

        <h1 class=" py-5 fw-bolder text-center">Frequently Asked <span class="client-color">Questions</span></h1>
        <div class="container-fluid row g-4 align-items-center d-flex justify-content-center">


          <div class="col-lg-6">
            <img class="img-fluid" src={faq} alt="" />
          </div>


          <div class="col-lg-6 text-start">
            <div class="accordion" id="accordionExample">

              <div class="accordion-item ">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h5 class="fw-bold py-2">What are the most important things I should
                      know about riding a bike?</h5>
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body fw-light">
                    Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the
                    mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and
                    legally compliant bike rider.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <h5 class="fw-bold py-2">How can I tell if my helmet is old and I need a
                      new one?</h5>
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body fw-light text-secondary">
                    <p>Bear in mind that if the helmet did its job most people would tell you that they did not even
                      hit their head, or did not hit their head that hard. And the thin shells on most helmets now tend to
                      hide any dents in the foam. But if you can see marks on the shell or measure any foam crush at all,
                      replace the helmet.</p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <h5 class="fw-bold py-2">My bike has been in storage is it safe to ride?</h5>
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body fw-light text-secondary">
                    Before going on a long ride, take your bike around the block and make sure it is safe to ride.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <h5 class="fw-bold py-2">What rules should I follow when riding my bike?</h5>
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body fw-light text-secondary">
                    1. Go With the Traffic Flow. Ride on the right in the same direction as other vehicles. <br />

                    2. Obey All Traffic Laws.<br />
                    3. Yield to Traffic When Appropriate.<br />
                    4. Be Predictable.<br />
                    5. Stay Alert at All Times.<br />
                    6. Look Before Turning.<br />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="container my-5">
          <h1 className="text-center fw-bold mb-3 text-size">Our Brands</h1>
          <div className="row row-cols-1 row-cols-md-4 g-4 ">
            <div className="col">
              <div className="brdr shadow h-100">
                <div className="text-center">
                  <img src={brand1} className="card-img-top img-fluid p-3 text-center animate" style={{ height: '7rem', width: '17rem' }} alt="..." />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="brdr shadow h-100">
                <div className="text-center">
                  <img src={brand2} className="card-img-top img-fluid p-3 text-center animate" style={{ height: '7rem', width: '17rem' }} alt="..." />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="brdr shadow h-100">
                <div className="text-center">
                  <img src={brand3} className="card-img-top img-fluid p-3 text-center animate" style={{ height: '7rem', width: '17rem' }} alt="..." />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="brdr shadow h-100">
                <div className="text-center">
                  <img src={brand4} className="card-img-top img-fluid p-3 text-center animate" style={{ height: '7rem', width: '17rem' }} alt="..." />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="brdr shadow h-100">
                <div className="text-center">
                  <img src={brand5} className="card-img-top img-fluid p-3 text-center animate" style={{ height: '7rem', width: '17rem' }} alt="..." />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="brdr shadow h-100">
                <div className="text-center">
                  <img src={brand6} className="card-img-top img-fluid p-3 text-center animate" style={{ height: '7rem', width: '17rem' }} alt="..." />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="brdr shadow h-100">
                <div className="text-center">
                  <img src={brand7} className="card-img-top img-fluid p-3 text-center animate" style={{ height: '7rem', width: '17rem' }} alt="..." />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="brdr shadow h-100">
                <div className="text-center">
                  <img src={brand8} className="card-img-top img-fluid p-3 text-center animate" style={{ height: '7rem', width: '17rem' }} alt="..." />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="brdr shadow h-100">
                <div className="text-center">
                  <img src={brand9} className="card-img-top img-fluid p-3 text-center animate" style={{ height: '7rem', width: '17rem' }} alt="..." />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="brdr shadow h-100">
                <div className="text-center">
                  <img src={brand10} className="card-img-top img-fluid p-3 text-center animate" style={{ height: '7rem', width: '17rem' }} alt="..." />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="brdr shadow h-100">
                <div className="text-center">
                  <img src={brand11} className="card-img-top img-fluid p-3 text-center animate" style={{ height: '7rem', width: '17rem' }} alt="..." />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="brdr shadow h-100">
                <div className="text-center">
                  <img src={brand12} className="card-img-top img-fluid p-3 text-center animate" style={{ height: '7rem', width: '17rem' }} alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
          {({ isVisible }) => (
            <section className="extra-background mb-5">
              <div className="container mb-5">
                <h1 className="text-center text-size mt-4 mb-5">Our Achivements</h1>
                <div className="container-fluid card-background my-3">
                  <div className="row align-items-center ">
                    <div className="g-5">
                      <div className="d-flex flex-column flex-lg-row g-5 content pb-5">
                        <div className="col-lg-3 col-12 d-flex justify-content-center">
                          <div className="text-center ">
                            <i class="fas fa-business-time icon"></i>
                            <h1 className="text-followers fcolor" >{isVisible ? <CountUp end={50} duration={1} /> : null}+</h1>
                            <h2 className="text-style fcolor">Brands</h2>
                          </div>
                        </div>

                        <div className="col-lg-3 col-12 d-flex mb-sm-3 justify-content-center">
                          <div className="text-center ">
                            <i class="far fa-handshake icon"></i>
                            <h1 className="text-followers fcolor">{isVisible ? <CountUp end={100} duration={1} /> : null}%</h1>
                            <h2 className="text-style fcolor">Trusted Seller</h2>
                          </div>
                        </div>

                        <div className="col-lg-3 col-12 d-flex justify-content-center">
                          <div className="text-center">
                            <i class="far fa-smile-beam icon"></i>
                            <h1 className="text-followers fcolor">{isVisible ? <CountUp end={99} duration={1} /> : null}%</h1>
                            <h2 className="text-style fcolor">
                              Satisfied Customers
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </VisibilitySensor>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
