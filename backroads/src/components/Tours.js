import React from "react";
import Title from "./Title";
import { tours } from "../data";

function Tours() {
  return (
    <section id="tours" className="section">
      <Title title="Featured" subTitle="tours" />
      {/* <!-- Tour section container --> */}
      <div className="tour-container">
        {tours.map((tour) => {
          const {id, image, date, title, info, location, duration, price} = tour
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                  <p>
                    {info}
                  </p>
                </div>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {location}
                  </p>
                  <p>6 days</p>
                  <p>from {price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Tours;
