import React from "react";
import BrowseIcon from "../images/Browse icon.svg";
import EmergencyIcon from "../images/emergencyicon.svg";
import StatesGrid from "./statesGrid";
import StickyFooter from "./reusableComponents/stickyFooter";
const States = () => {
	return (
		<div className="StatesContainer">
			<div className="statesContainer-Content">
				<div className="headerText">
					<h1>HOME</h1>

					<div className="state-search-input">
						<i class="fa fa-search"></i>
						<input type="text" placeholder="Search Your State here"></input>
					</div>
				</div>

				<div className="states-content-container">
					<h2
						style={{
							textAlign: "left",
							paddingLeft: "1rem",
							marginBottom: "0.2rem",
							color: "white",
							fontSize: "1.2rem",
							fontFamily: "var(--text-medium)",
						}}
					>
						Select State
					</h2>
					<StatesGrid />
				</div>
			</div>
			<StickyFooter />
		</div>
	);
};

export default States;

/*/
footer moved to resubale component:
<footer>
				<ul>
					<li>
						<img src={EmergencyIcon} alt="Unavailable" />
					</li>
					<li>
						<img src={BrowseIcon} alt="Unavailable" />
					</li>
				</ul>
			</footer>
			
			/*/
