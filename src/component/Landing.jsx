import React from "react";

export default function LandingPage() {
  return (
    <section
      id="mainPage"
      class="mainPage min-hv-100 d-flex align-items-center"
    >
      <div class="container">
        <div class="row uper">
          <div class="col-lg-6 d-flex flex-column justify-content-center text-start order-2 order-lg-1 ">
            <h1 data-aos="fade-up">FAREE'S</h1> 
            <h1 data-aos="fade-up" className="text-warning">DELIGHT RESTUARANT.</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              "Faree's delight restaurant is where passion meets perfection, we create homemade goodness
              that warms hearts and satisfies taste buds. our goal is to deliver quality, flavor, and
              joy in every meal".
          
            </h2>
            <div data-aos="fade-up" data-aos-delay="600" className="d-flex flex-row gap-4">
              <div class="text-center text-lg-start mt-4">
                <a
                  href="/projects"
                  class="btn btn-lg text-uppercase bg-warning rounded-5 scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  view my work
                </a>
              </div>
              <div className="text-center text-lg-start mt-4">
               <a
        
                  href="/contact"
                  class="btn btn-lg text-uppercase rounded-5 btn-outline-warning scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  get in touch
                 
              </a>
              </div>
            </div>
          </div>
          <div
            class="col-lg-6 hero-img order-lg-1 order-1 "
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <h4 className=" d-lg-none img-head">Faree's Delight</h4>
            <img src="/7.jpg" className="img-fluid" alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
}
