import React from "react";
import "../App.css";
import heroImg from "../images/hero.jpg";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-wrapper grid grid-cols-2 container">
        <div className="hero-text flex">
          <h1 className="heading-primary">Little Lemon</h1>
          <p className="main-subhead">Chicago</p>
          <p className="hero-description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            enim, temporibus suscipit eligendi architecto illum dolores ipsa vel
            dicta? Ipsum vel dolorum, sequi quia ab accusamus facilis ipsa rem
            ducimus?
          </p>
          <div className="hero-nav">
            <div>
              <a href="#" className="hero-btn br-16">
                Reserve a Table
              </a>
            </div>
          </div>
        </div>
        <div>
          <img className="hero-img br-16" src={heroImg} alt="Chef image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
