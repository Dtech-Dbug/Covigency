import React, { useState, useEffect } from "react";
import StatesGrid from "../UserComponents/statesGrid";
import StickyFooter from "../reusableComponents/stickyFooter";
import StateDataArray from "../Data/StateDataArray";

const States = () => {
	const [keywords, setKeywords] = useState("");
	const [gridState, setGridState] = useState([]);

	useEffect(() => {
		setGridState(StateDataArray);
		console.log("state: ", gridState);
	}, [gridState]);
	function handleChange(e) {
		e.preventDefault();

		setKeywords(e.target.value);
		console.log("Keyords : ", keywords);
	}

	return (
		<div className="Main-Container">
			<div className="Main-Container-Content">
				<div className="headerText">
					<h1>HOME</h1>

					<div className="state-search-input">
						<i class="fa fa-search"></i>
						<input
							type="text"
							placeholder="Search Your State here"
							onChange={handleChange}
						></input>
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
					<StatesGrid gridState={gridState} keywords={keywords} />
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
