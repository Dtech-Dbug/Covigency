import React, { useEffect } from "react";
import StickyFooter from "../reusableComponents/stickyFooter";
import CityLists from "./cityLists";
import HomeHeaderBootstrap from "../reusableComponents/HomeHeaderBootstrap";

const Cities = ({ match }) => {
	useEffect(() => {
		console.log("Match Slug ", match.params.slug);
	}, [match]);
	return (
		<div className="main-container">
			<div className="container">
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
				<HomeHeaderBootstrap stateCode={match.params.slug} />

			

				<div className="states-content-container">
					<h2 className="text-light" >
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
