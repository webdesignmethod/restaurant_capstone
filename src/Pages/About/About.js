import React from "react";
import "../../App.css";
import Chefs from "../../images/chefs.jpg";

const About = () => {
  return (
    <div>
      <section className="about-section">
        <div className="about-wrapper grid grid-cols-2 container">
          <div className="about-text flex">
            <h1 className="heading-primary">Little Lemon Restaurant</h1>
            <p className="main-subhead">Chicago</p>
            <p className="about-description">
              About Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Culpa explicabo ut iusto sed voluptate laborum sint earum. Dolores
              aperiam impedit odio sed, vero, magnam quasi, delectus animi optio
              a eius! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto magnam error, delectus, laboriosam maiores ipsam
              tempore quae recusandae debitis vitae repellendus nostrum dolores
              soluta aut suscipit ea vel aspernatur quidem..
            </p>
          </div>
          <div>
            <img className="about-img" src={Chefs} alt="Chefs image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
