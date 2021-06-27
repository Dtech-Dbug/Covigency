import React, { useEffect, useState } from "react";
import HomeHeaderBootstrap from "../reusableComponents/HomeHeaderBootstrap";
import HospitalList from "../Data/HospitalList";
import ActivityStatus from "./ActivityStatus";
// Slider
import Slider from "react-slick";
import SliderSetting from "../../Utils/SliderSetting";
// Import css files
import "slick-carousel/slick/slick.css";
import "./CovidTesting.css";

const HospitalReviews = ({ match }) => {
  const [hospital, setHospital] = useState();

  useEffect(() => {
    setHospital(HospitalList[match.params.id]);
  }, [hospital, match]);

  return (
    <div className="main-container">
      <div className="container">
        <HomeHeaderBootstrap />
        <h3 className="text-light">Reviews</h3>

        {hospital && (
          <>
            <div className="card card--dark hospital-info">
              <div className="hospital-info-header">
                <h3 className="card__title">{hospital.name}</h3>
                <div>
                  <ActivityStatus activity={hospital.activityStatus} />
                </div>
              </div>
              <Slider className="review-slider" {...SliderSetting}>
                {hospital.reviews ? (
                  hospital.reviews.map((item, key) => {
                    return (
                      <p className="review-text" key={key}>
                        {item}{" "}
                      </p>
                    );
                  })
                ) : (
                  <p className="card--center">No Reviews</p>
                )}
              </Slider>
            </div>
            <div className="review-bar-container">
              <div className="card--dark review-bar-item">
                <span className="activityStatus activityStatus-free "></span>
                <p className="review-bar-value">(7-10)</p>
              </div>
              <div className="card--dark review-bar-item">
                <span className="activityStatus activityStatus-moderate"></span>
                <p className="review-bar-value">(4-7)</p>
              </div>
              <div className="card--dark review-bar-item">
                <span className="activityStatus activityStatus-full"></span>
                <p className="review-bar-value">(0-4)</p>
              </div>
            </div>

            <button className="review-alert">
              <span>Rate according to the points given above</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default HospitalReviews;
