import React from "react";

const HomeHeaderBootstrap = ({ stateCode }) => {
	return (
		<div className="headerText">
			<div className="header-and-logo">
				<div className="header">
					<h1>HOME</h1>
				</div>

				{stateCode && (
					<div className="logo">
						<div className="stateAvatar">
							<div className="state-avatar-name">{stateCode}</div>
						</div>
					</div>
				)}
			</div>

			<div className="state-search-input">
				<i class="fa fa-search"></i>
				<input type="text" placeholder="Search Your CIty here"></input>
			</div>
		</div>
	);
};

export default HomeHeaderBootstrap;
