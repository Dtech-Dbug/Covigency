import React, { useEffect, useState } from "react";
import HospitalList from "../Data/HospitalList";

const HospitalInfo = ({ match }) => {
	const [hospital, setHospital] = useState();

	useEffect(() => {
		setHospital(HospitalList[match.params.name]);
		console.log("hospitalInfo", hospital); //to check if we are getting the data correctly
		console.log(match.params.name);
	});
	return (
		<div>
			<h3 style={{ color: "white" }}>hello</h3>
			<h3 style={{ color: "white" }}>{match.params.name}</h3>
			{hospital && (
				<>
					{" "}
					<h3 style={{ color: "white" }}>{hospital.name}</h3>
					<h3 style={{ color: "white" }}>{hospital.contactNo}</h3>{" "}
				</>
			)}

			{/* {hospital && (
				<>
					<h3 style={{ color: "white" }}>{hospital.name}</h3>
					<h3 style={{ color: "white" }}>{hospital.address}</h3>
					<h3 style={{ color: "white" }}>{hospital.contactNo}</h3>
					<h3 style={{ color: "white" }}>{hospital.timing}</h3>
				</>
			)} */}
		</div>
	);
};

export default HospitalInfo;
