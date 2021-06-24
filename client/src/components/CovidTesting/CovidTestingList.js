import React, { Fragment } from "react";

//import UseHistory Hook for pushing routes
import { useHistory } from "react-router-dom";

import "./CovidTesting.css";

const CovidTestingList = ({ HospitalList }) => {
	const history = useHistory();

	const checkAvailability = (availability) => {
		if (availability === "full") {
			return "availabilityStatus-full";
		} else if (availability === "moderate") {
			return "availabilityStatus-moderate";
		} else {
			return "availabilityStatus-free";
		}
	};

	function routeToHospitalInfo(name) {
		console.log(name); //console.log name to be sure

		history.push(`/hospital/${name}`);
	}
	return (
		<Fragment>
			{" "}
			<h3 className="text-light">Covid-19 Testing</h3>
			<div className="grid grid-1x2 resource-block">
				{HospitalList.map(({ id, name, address, availabilityStatus }) => {
					return (
						<div
							key={id}
							className="covid-testing card card--dark"
							onClick={() => routeToHospitalInfo(name)}
						>
							<span
								className={`availabilityStatus ${checkAvailability(
									availabilityStatus
								)}`}
								src={availabilityStatus}
							/>

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
