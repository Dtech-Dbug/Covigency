import React from "react";
import "../stylesheets/CallToAction.css";

const CallToActionCard = ({
  category,
  information,
  buttonText,
  image,
  beta,
  link,
}) => {
  return (
    <div className="call-to-action">
      <h2 className="text-light">{category}</h2>

      <div className="card card--dark card--center">
        <img src={image} alt="oops" className="card__image" />

        <p className="card__description">{information}</p>

        <a href={link} download="Yoga">
          <button className="card__button">
            {buttonText}
            <span className="beta">{beta}</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default CallToActionCard;
