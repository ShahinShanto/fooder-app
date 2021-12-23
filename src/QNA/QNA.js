import React from 'react';
import img from '../images/faq.png';

const QNA = () => {
    return (
        <div class="container text-center">
            <h1 class=" mt-5 fw-bolder b-fcolor">Frequently Asked Questions</h1>
            <h5>FAQ</h5>
            <div class="row g-4 align-items-center d-flex justify-content-center mb-3">
                <div class="col-lg-6">
                    <img class="img-fluid" src={img} alt="" />
                </div>
                <div class="col-lg-6 text-start">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item ">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <h5 class="fw-bold py-2 b-fcolor">What is our purpose?</h5>
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body fw-light text-secondary">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit similique corrupti accusantium enim odio voluptas explicabo. Possimus voluptatibus fugit ex.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <h5 class="fw-bold py-2 fcolor b-fcolor">How we actually work?</h5>
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body fw-light text-secondary">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, perspiciatis? Aperiam delectus sunt ea velit ab architecto voluptatibus, cumque quod?
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <h5 class="fw-bold py-2 b-fcolor">What should you do to join us?</h5>
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body fw-light text-secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit fuga, suscipit ab, corporis error fugit blanditiis expedita laboriosam molestiae eos dolorem excepturi exercitationem corrupti quisquam cupiditate nulla nisi placeat.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <h5 class="fw-bold py-2 b-fcolor">How we deliver our foods?</h5>
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body fw-light text-secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates corrupti, ullam doloribus optio hic ducimus laudantium labore modi officia nam?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QNA;