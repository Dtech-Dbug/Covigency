import React from "react";
import StatesGrid from "../UserComponents/statesGrid";
import StickyFooter from "../reusableComponents/stickyFooter";
import CityLists from "./cityLists";
import HomeHeaderWithCSS from "../reusableComponents/HomeHeaderWithCSS";

const Cities = () => {
	return (
		<div className="Main-Container">
			<div className="Main-Container-Content">
				{/* <div className="headerText">
					<div className="header-and-logo">
						<div className="header">
							<h1>HOME</h1>
						</div>

						<div className="logo">
							<div className="stateAvatar">
								<div className="state-avatar-name">AP</div>
							</div>
						</div>
					</div>

					<div className="state-search-input">
						<i class="fa fa-search"></i>
						<input type="text" placeholder="Search Your CIty here"></input>
					</div>
				</div> */}
				<HomeHeaderWithCSS />

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
						Select City
					</h2>
					<CityLists />
				</div>
			</div>
			<StickyFooter />
		</div>
	);
};

export default Cities;
