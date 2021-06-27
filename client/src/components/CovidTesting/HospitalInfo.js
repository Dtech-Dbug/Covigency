import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import HomeHeaderBootstrap from "../reusableComponents/HomeHeaderBootstrap";
import HospitalList from "../Data/HospitalList";

import ActivityStatus from "./ActivityStatus";
import CallIcon from "../../icons/call-icon.svg";
import MessageIcon from "../../icons/message-icon.svg";

const HospitalInfo = ({ match }) => {
  const history = useHistory();
  const [hospital, setHospital] = useState();

  useEffect(() => {
    setHospital(HospitalList[match.params.id]);
  }, [hospital, match]);

  const passSlug = (id) => {
    history.push(`/hospital/${id}/reviews`);
  };
  return (
    <div className="main-container">
      <div className="container">
        <HomeHeaderBootstrap />
        <h3 className="text-light">Covid-19 Testing</h3>

        {hospital && (
          <>
            <div className="card card--dark hospital-info">
              {console.log(hospital)}
              <div className="hospital-info-header">
                <h3 className="card__title">{hospital.name}</h3>
                <div>
                  <ActivityStatus activity={hospital.activityStatus} />
                </div>
              </div>
              <div className="hospital-info-group">
                <p className="info-group-name">Address:</p>
                <p className="info-group-content">{hospital.address}</p>
              </div>
              <div className="hospital-info-group">
                <p className="info-group-name">Phone No:</p>
                <p className="info-group-content">{hospital.contactNo}</p>
              </div>
              <div className="hospital-info-group">
                <p className="info-group-name">Last Updated:</p>
                <p className="info-group-content">{hospital.lastUpdated}</p>
              </div>
              <div className="hospital-info-group">
                <p className="info-group-name">Timing:</p>
                <p className="info-group-content">{hospital.timing}</p>
              </div>
            </div>
            <div className="info-action-container">
              <div class="card card--dark info-action">
                <img src={CallIcon} alt="icon" className="info-action-icon" />
                <p className="info-action-name">Call</p>
              </div>
              <div class="card card--dark info-action">
                <img
                  src={MessageIcon}
                  alt="icon"
                  className="info-action-icon"
                />
                <p className="info-action-name">Call</p>
              </div>
            </div>
            <div className="review-button">
              <button className="card__button">
                Did This Contact Helped You?
              </button>
            </div>

            <button
              className="review-alert"
              onClick={() => passSlug(hospital.id)}
            >
              <span>Your review helps 10x People</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default HospitalInfo;
