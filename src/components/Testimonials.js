import React from "react";
import "../App.css";
import Reviewer1 from "../images/testimonial-1.jpg";
import Reviewer2 from "../images/testimonial-2.jpg";
import Reviewer3 from "../images/testimonial-3.jpg";
import Reviewer4 from "../images/testimonial-4.jpg";

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-wrapper flex container">
        <div className="testimonial-heading">
          <h1 className="heading-primary">Testimonials</h1>
        </div>
        <div className="testimonials-container ">
          <div className="testimonial br-16">
            <div class="rating-icons">
              <ion-icon class="star-icon" name="star"></ion-icon>
              <ion-icon class="star-icon" name="star"></ion-icon>
              <ion-icon class="star-icon" name="star"></ion-icon>
              <ion-icon class="star-icon" name="star"></ion-icon>
              <ion-icon class="star-icon" name="star"></ion-icon>
            </div>
            <div className="testimonial-tagline">
              <div>
                <img
                  className="testimonial-img"
                  src={Reviewer1}
                  alt="Customer"
                />
              </div>
              <div>
                <p className="tagline-name">Tyler Smith</p>
              </div>
            </div>
            <p className="review">"Amazing menu with lots of variety."</p>
          </div>

          <div className="testimonial br-16">
            <div class="rating-icons">
              <ion-icon class="star-icon" name="star"></ion-icon>
              <ion-icon class="star-icon" name="star"></ion-icon>
              <ion-icon class="star-icon" name="star"></ion-icon>
              <ion-icon class="star-icon" name="star"></ion-icon>
              <ion-icon class="star-icon" name="star"></ion-icon>
            </div>
            <div className="testimonial-tagline">
              <div>
                <img
                  className="testimonial-img"
                  src={Reviewer2}
                  alt="Customer"
                />
              </div>
              <div>
                <p className="tagline-name">Ina Lan</p>
              </div>
            </div>
            <p className="review">
              "This is the best spot for any time of the day."
            </p>
          </div>

          <div className="testimonial br-16">
            <div class="rating-icons">
              <ion-icon class="star-icon" name="star"></ion-icon>
              <ion-icon class="star-icon" name="star"></ion-icon>
              <ion-icon class="star-icon" name="star"></ion-icon>
              <ion-icon class="star-icon" name="star"></ion-icon>
              <ion-icon class="star-icon" name="star"></ion-icon>
            </div>
            <div className="testimonial-tagline">
              <div>
                <img
                  className="testimonial-img"
                  src={Reviewer3}
                  alt="Customer"
                />
              </div>
              <div>
                <p className="tagline-name">John Yu</p>
              </div>
            </div>
            <p className="review">"Fast service and delicious food."</p>
          </div>

          <div className="testimonial br-16">
            <div class="rating-icons">
              <ion-icon class="star-icon" name="star"></ion-icon>
              <ion-icon class="star-icon" name="star"></ion-icon>
              <ion-icon class="star-icon" name="star"></ion-icon>
              <ion-icon class="star-icon" name="star"></ion-icon>
              <ion-icon class="star-icon" name="star"></ion-icon>
            </div>
            <div className="testimonial-tagline">
              <div>
                <img
                  className="testimonial-img"
                  src={Reviewer4}
                  alt="Customer"
                />
              </div>
              <div>
                <p className="tagline-name">Mani Lira</p>
              </div>
            </div>
            <p className="review">"Great healthy choices, delicious menu."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
