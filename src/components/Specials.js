import React from "react";
import Bruschetta from "../images/bruschetta.svg";

const Specials = () => {
  return (
    <section className="specials-section">
      <div className="specials-wrapper">
        <div className="specials-heading flex">
          <h1 className="heading-primary">This week's specials!</h1>
          <a href="" className="specials-btn br-16">
            Online Menu
          </a>
        </div>

        <div class="card-columns-container grid grid-cols-3">
          <div className="card">
            <img src={Bruschetta} alt="" className="card-image" />
            <div className="card-content">
              <div className="card-heading flex">
                <div className="card-subhead">Subhead</div>
                <div className="card-price">Price</div>
              </div>
              <p className="card-description">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Bruschetta} alt="" className="card-image" />
            <div className="card-content">
              <div className="card-heading flex">
                <div className="card-subhead">Subhead</div>
                <div className="card-price">Price</div>
              </div>
              <p className="card-description">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Bruschetta} alt="" className="card-image" />
            <div className="card-content">
              <div className="card-heading flex">
                <div className="card-subhead">Subhead</div>
                <div className="card-price">Price</div>
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
