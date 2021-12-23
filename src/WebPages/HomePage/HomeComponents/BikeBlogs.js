import React from "react";

const BikeBlogs = () => {
  return (
    <section class="container pb-5">
      <h1 class="text-center mt-5 text-warning">Our Recipes</h1>
      <h4 className=" text-center mb-5">BLOGS</h4>
      <div class="row row-cols-1 row-cols-lg-2 g-4">
        <div class="col">
          <div class="card h-100">
            <div class="row align-items-center ps-0 ps-lg-3">
              <div class="col-lg-6 text-center py-3 ">
                <iframe class="img-fluid " src="https://www.youtube.com/embed/foD42-73wdI" title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              </div>
              <div class="col-lg-6">
                <div class="card-body">
                  <h5 class="card-title fw-bold">Better Than Fast Food! Classic Smash Burger Recipe</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="row align-items-center ps-0 ps-lg-3">
              <div class="col-lg-6 text-center py-3">
                <iframe class="img-fluid" src="https://www.youtube.com/embed/53Sx26ByIIo" title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              </div>
              <div class="col-lg-6">
                <div class="card-body">
                  <h5 class="card-title fw-bold">The Easiest Chicken Biriyani Recipe
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="row align-items-center ps-0 ps-lg-3">
              <div class="col-lg-6 text-center py-3">
                <iframe class="img-fluid " src="https://www.youtube.com/embed/8Lp8qXu5mvo" title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              </div>
              <div class="col-lg-6">
                <div class="card-body">
                  <h5 class="card-title fw-bold">How to Make Crispy French Fries Recipe
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="row align-items-center ps-0 ps-lg-3">
              <div class="col-lg-6 text-center py-3">
                <iframe class="img-fluid" src="https://www.youtube.com/embed/3CVDrAkhDmI" title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              </div>
              <div class="col-lg-6">
                <div class="card-body">
                  <h5 class="card-title fw-bold">KFC style Fried Chicken Recipe</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeBlogs;
