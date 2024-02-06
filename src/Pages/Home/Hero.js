import React from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import heroImg from "../../images/hero.jpg";

const Hero = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/bookings");
  }

  return (
    <section className="hero-section">
      <div className="hero-wrapper grid grid-cols-2">
        <div className="hero-text flex">
          <h1 className="heading-primary">Little Lemon</h1>
          <p className="main-subhead">Chicago</p>
          <p className="hero-description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            enim, temporibus suscipit eligendi architecto illum dolores ipsa vel
            dicta? Ipsum vel dolorum facilis ipsa rem
            ducimus? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Enim possimus, accusamus maiores alias doloribus quae. Accusantium
            itaque beatae similique nam quaerat unde saepe aut labore enim!
          </p>
          <div className="hero-nav">
            <div>
              <button
                aria-label="On Click"
                className="yellow-btn br-16 center"
                onClick={handleClick}
              >
                Reserve a Table
              </button>
            </div>
          </div>
        </div>
        <div>
          <img className="hero-img br-16" src={heroImg} alt="Chef" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
