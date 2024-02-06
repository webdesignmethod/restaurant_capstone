import React from "react";
import { useNavigate } from "react-router-dom";
import greekSalad from "../../images/greeksalad.jpg";
import bruschetta from "../../images/bruschetta.jpg";
import lemonDessert from "../../images/lemondessert.jpg";
import "../../App.css";

const Specials = () => {
  const navigate = useNavigate();

  function handleMenuClick() {
    navigate("/menu");
  }

  function handleOrderClick() {
    navigate("/order");
  }

  return (
    <section className="specials-section">
      <div className="specials-wrapper">
        <div className="specials-heading flex">
          <h1 className="heading-primary">This week's specials!</h1>
          <button
            aria-label="On Click"
            className="yellow-btn br-16"
            onClick={handleMenuClick}
          >
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

              <button
                aria-label="On Click"
                className="card-btn"
                onClick={handleOrderClick}
              >
                Order a delivery
                <ion-icon class="card-icon" name="restaurant"></ion-icon>
              </button>
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

              <button
                aria-label="On Click"
                className="card-btn"
                onClick={handleOrderClick}
              >
                Order a delivery
                <ion-icon class="card-icon" name="restaurant"></ion-icon>
              </button>
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

              <button
                aria-label="On Click"
                className="card-btn"
                onClick={handleOrderClick}
              >
                Order a delivery
                <ion-icon class="card-icon" name="restaurant"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;
