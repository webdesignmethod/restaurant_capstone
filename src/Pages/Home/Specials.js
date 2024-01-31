import React from "react";
import { useNavigate } from "react-router-dom";
import greekSalad from "../../images/greek-salad.jpg";
import bruschetta from "../../images/bruschetta.svg";
import lemonDessert from "../../images/lemondessert.jpg";
import "../../App.css";

const Specials = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/menu");
  }

  return (
    <section className="specials-section">
      <div className="specials-wrapper">
        <div className="specials-heading flex">
          <h1 className="heading-primary">This week's specials!</h1>
          <button className="yellow-btn br-16" onClick={handleClick}>
            Online Menu
          </button>
        </div>

        <div className="card-columns-container grid grid-cols-3">
          <div className="card">
            <img src={greekSalad} alt="" className="card-image" />
            <div className="card-content">
              <div className="card-heading flex">
                <div className="card-subhead">Greek Salad</div>
                <div className="card-price">$6.99</div>
              </div>
              <p className="card-description">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={bruschetta} alt="" className="card-image" />
            <div className="card-content">
              <div className="card-heading flex">
                <div className="card-subhead">Bruschetta</div>
                <div className="card-price">$4.99</div>
              </div>
              <p className="card-description">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={lemonDessert} alt="" className="card-image" />
            <div className="card-content">
              <div className="card-heading flex">
                <div className="card-subhead">Lemon Dessert</div>
                <div className="card-price">$4.00</div>
              </div>
              <p className="card-description">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;
