import React from "react";
import BrowseIcon from "../images/Browse icon.svg";
import EmergencyIcon from "../images/emergencyicon.svg";
const States = () => {
	return (
		<div className="StatesContainer" style={{ background: "white" }}>
			<footer style={{ background: "crimson" }}>
				<ul>
					<li>
						<img src={EmergencyIcon} alt="Unavailable" />
					</li>
					<li>
						<img src={BrowseIcon} alt="Unavailable" />
					</li>
				</ul>
			</footer>
		</div>
	);
};

export default States;
