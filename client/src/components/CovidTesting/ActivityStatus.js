import React from "react";
import "./CovidTesting.css";

const ActivityStatus = ({ activity }) => {
  const checkActivityStatus = (activityStatus) => {
    if (activityStatus === "full") {
      return "activityStatus-full";
    } else if (activityStatus === "moderate") {
      return "activityStatus-moderate";
    } else {
      return "activityStatus-free";
    }
  };
  return <span className={`activityStatus ${checkActivityStatus(activity)}`} />;
};

export default ActivityStatus;
