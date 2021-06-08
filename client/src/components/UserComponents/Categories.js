import React from "react";
import HomeHeaderBootstrap from "../reusableComponents/HomeHeaderBootstrap";
import HomeHeaderWithCSS from "../reusableComponents/HomeHeaderWithCSS";
import StatesGrid from "./statesGrid";

const Categories = () => {
	return (
		<div>
			<div className="Main-Container">
				<HomeHeaderWithCSS />
				<StatesGrid />
			</div>
		</div>
	);
};

export default Categories;
