import React from "react";

const List = ["City1", "City2", "City3", "City4", "City5"];

const CityLists = () => {
	return (
		<div className="City-Container">
			{List.map((city, i) => {
				return (
					<div className="child-flex-item" key={i}>
						{city}
					</div>
				);
			})}
			<br />

			<div className="work-with-us">
				<p> Want To Work With Us?</p>
				<button className="volunteer-btn">Join Us As Volunteer</button>
			</div>
		</div>
	);
};

export default CityLists;
