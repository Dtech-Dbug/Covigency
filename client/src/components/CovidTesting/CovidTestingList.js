import React, { Fragment } from "react";

//import UseHistory Hook for pushing routes
import { useHistory } from "react-router-dom";

import ActivityStatus from "./ActivityStatus";
import "./CovidTesting.css";

const CovidTestingList = ({ HospitalList }) => {
  const history = useHistory();

  function routeToHospitalInfo(id) {
    console.log(id); //console.log name to be sure

    history.push(`/hospital/${id}`);
  }
  return (
    <Fragment>
      {" "}
      <h3 className="text-light">Covid-19 Testing</h3>
      <div className="grid grid-1x2 resource-block">
        {HospitalList.map(({ id, name, address, activityStatus }) => {
          return (
            <div
              key={id}
              className="covid-testing card card--dark"
              onClick={() => routeToHospitalInfo(id)}
            >
              <ActivityStatus activity={activityStatus} />
              <div className="card__header">
                <h3 className="card__title">{name}</h3>
                <p className="card__description">{address}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default CovidTestingList;
