import React, { useState, useEffect } from "react";
import HomeHeaderBootstrap from "../reusableComponents/HomeHeaderBootstrap";
import StickyFooter from "../reusableComponents/stickyFooter";
import CovidTestingList from "./CovidTestingList";

// Data
import HospitalList from "../Data/HospitalList";
const CovidTesting = () => {
  const [covidTestingList, setCovidTestingList] = useState([]);
  useEffect(() => {
    setCovidTestingList(HospitalList);
  }, [covidTestingList]);

  return (
    <div className="main-container">
      <div className="container">
        <HomeHeaderBootstrap />
        <CovidTestingList HospitalList={covidTestingList} />
      </div>
      <StickyFooter />
    </div>
  );
};

export default CovidTesting;
