import React from "react";

const HomeHeaderWithCSS = () => {
	return (
		<div className="Main-Container-Content">
			<div className="headerText">
				<h1>HOME</h1>

				<div className="state-search-input">
					<i class="fa fa-search"></i>
					<input type="text" placeholder="Search Your State here"></input>
				</div>
			</div>
		</div>
	);
};

export default HomeHeaderWithCSS;
