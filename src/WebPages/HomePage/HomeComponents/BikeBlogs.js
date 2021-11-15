import React from "react";

const BikeBlogs = () => {
  return (
    <section class="container pb-5">
      <h1 class="text-center mt-5 ">Bike <span class="client-color">Reviews</span></h1>
      <p className="text-danger text-center mb-5">BLOGS</p>
      <div class="row row-cols-1 row-cols-lg-2 g-4">
        <div class="col">
          <div class="card h-100">
            <div class="row align-items-center ps-0 ps-lg-3">
              <div class="col-lg-6 text-center py-3 ">
                <iframe class="img-fluid " src="https://www.youtube.com/embed/1K4eulighww" title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              </div>
              <div class="col-lg-6">
                <div class="card-body">
                  <h5 class="card-title fw-bold">BMW G 310 GS BS6 | Pros, Cons and Should You Buy One | Ideal step
                    up to the GS
                    brand?</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="row align-items-center ps-0 ps-lg-3">
              <div class="col-lg-6 text-center py-3">
                <iframe class="img-fluid" src="https://www.youtube.com/embed/YCoafpsOALY" title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              </div>
              <div class="col-lg-6">
                <div class="card-body">
                  <h5 class="card-title fw-bold">Bajaj Pulsar NS 125 | Road Test Review | Best Sporty 125cc On Sale?
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
                <iframe class="img-fluid " src="https://www.youtube.com/embed/9dLK91cpVG0" title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              </div>
              <div class="col-lg-6">
                <div class="card-body">
                  <h5 class="card-title fw-bold">Livewire One | New name, but still the same? | All you need to know
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
                <iframe class="img-fluid" src="https://www.youtube.com/embed/Y4k-O1Z_cnQ" title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              </div>
              <div class="col-lg-6">
                <div class="card-body">
                  <h5 class="card-title fw-bold">Aprilia Storm 125 | Pros, Cons, And Should You Buy One? | Most
                    Approachable Aprilia</h5>
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
