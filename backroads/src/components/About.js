import React from "react";

function About() {
  return (
    <section id="about" className="section">
      <div className="section-title">
        <h2>
          About <span>us</span>
        </h2>
      </div>

      {/* <!-- container for image and content --> */}
      <div className="aboutus-container">
        <div className="image">
          <img src="images/about.jpeg" alt="About Us Image" />
        </div>
        <div className="content">
          <h2>Explore The Difference</h2>
          <p>
            Embark on a journey with Backroads and discover a world of
            difference. Our travel experiences are crafted to provide you with
            unparalleled adventures, creating memories that last a lifetime.
            Whether you seek the thrill of exploration or the tranquility of
            serene landscapes, we have something for every kind of traveler.
          </p>
          <p>
            Immerse yourself in diverse cultures, savor unique cuisines, and
            connect with the local communities you visit. Our expert guides will
            lead you on exciting excursions, sharing insights and stories that
            go beyond the ordinary. At Backroads, we believe that travel is not
            just about destinations; it's about the experiences that transform
            and enrich your perspective on the world.
          </p>
          <div className="btn-container">
            <button>Read more</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
