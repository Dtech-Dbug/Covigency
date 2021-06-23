import React from "react";
import PostCovidIcon from "../../../icons/Postcovid.png";
import Food from "../../../icons/food.png";
import HomeHeaderBootstrap from "../../reusableComponents/HomeHeaderBootstrap";
import StickyFooter from "../../reusableComponents/stickyFooter";

import "./PostCovid.css";
const PostCovid = ({ history }) => {
  function YogaRoute(e) {
    e.preventDefault();
    history.push("/yoga");
  }
  function FoodRoute(e) {
    e.preventDefault();
    history.push("/diet");
  }
  return (
    <div  className="main-container">

      <div className="container post-covid-container">
      <HomeHeaderBootstrap />
        <h3 className="text-light">Post Covid</h3>
        <div className="grid grid-1x2">
          <div className="card card--dark " onClick={YogaRoute}>
            <img className="card__image" src={PostCovidIcon} alt="oops" />

            <div className="card__header information">
              <h2 className="card__title">Yoga</h2>
            </div>
          </div>

          <div className="card card--dark " onClick={FoodRoute}>
            <img className="card__image" src={Food} alt="oops" />
            <div className="card__header information">
              <h2 className="card__title">Food</h2>
            </div>
          </div>
        </div>
      </div>
      <StickyFooter />
    </div>
  );
};

export default PostCovid;
