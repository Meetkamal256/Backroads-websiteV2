import React from "react";
import Title from "./components/Title";

function Services() {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="services-menu">
        <article className="service">
          <span className="service-icon">
            <i className="fas fa-wallet fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">Saving Money</h4>
            <p className="service-text">
              Affordable travel experiences tailored to your budget, ensuring
              you get the most value for your money.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon">
            <i className="fas fa-tree fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">Endless Hiking</h4>
            <p className="service-text">
              Explore breathtaking trails and scenic landscapes with our diverse
              hiking options suitable for all skill levels.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon">
            <i className="fas fa-socks fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">Amazing Comfort</h4>
            <p className="service-text">
              Experience comfort like never before with cozy lodgings,
              well-appointed rooms, and attentive service.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Services;
