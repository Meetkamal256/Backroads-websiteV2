import React from "react";
import Title from "./Title";

function Tours() {
  return (
    <section id="tours" className="section">
      <Title title="Featured" subTitle="tours" />
      {/* <!-- Tour section container --> */}
      <div className="tour-container">
        <article className="tour-card">
          <div className="tour-img-container">
            <img src="images/tour-1.jpeg" className="tour-img" alt="" />
            <p className="tour-date">August 26th, 2020</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>Tibet Adventure</h4>
              <p>
                Embark on a soul-stirring journey to the mystical land of Tibet.
                Traverse through breathtaking landscapes, ancient monasteries,
                and immerse yourself in the rich Tibetan culture. This 6-day
                adventure promises an unforgettable experience, blending
                spirituality with awe-inspiring natural beauty.
              </p>
            </div>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                china
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src="images/tour-2.jpeg" className="tour-img" alt="" />
            <p className="tour-date">October 1st, 2020</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>Best of Java</h4>
              <p>
                Discover the enchanting beauty of Java, Indonesia's cultural
                heart. This 11-day tour takes you through ancient temples, lush
                landscapes, and vibrant markets. Immerse yourself in the rich
                Javanese traditions, savor local delicacies, and create lasting
                memories in this diverse and captivating destination.
              </p>
            </div>

            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                Indonesia
              </p>
              <p>11 days</p>
              <p>from $1400</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src="images/tour-1.jpeg" className="tour-img" alt="" />
            <p className="tour-date">August 26th, 2020</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>Explore Hong Kong</h4>
              <p>
                Uncover the magic of Hong Kong in 6 days. From dazzling
                cityscapes to hidden gems, this tour encapsulates the essence of
                Hong Kong's diverse attractions. Immerse yourself in local
                culture, indulge in delectable cuisine, and create lasting
                memories.
              </p>
            </div>

            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                china
              </p>
              <p>8 days</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src="images/tour-1.jpeg" className="tour-img" alt="" />
            <p className="tour-date">August 26th, 2020</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>Kenya Highlights</h4>
              <p>
                Embark on a mesmerizing journey through the heart of Kenya. This
                6-day tour is designed to showcase the breathtaking landscapes,
                diverse wildlife, and rich cultural heritage of this East
                African gem. Witness the Great Migration, explore national
                parks, and engage with local communities for an unforgettable
                safari experience.
              </p>
            </div>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                china
              </p>
              <p>20 days</p>
              <p>from $3500</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Tours;
