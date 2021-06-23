import React from "react";
import HomeHeaderBootstrap from "../../reusableComponents/HomeHeaderBootstrap";
import CategoryGrid from "./CategoryGrid";

const SelectCategories = () => {
	return (
		<div  className="main-container">
			<div className="container">
				<HomeHeaderBootstrap />
				<CategoryGrid />
			</div>
		</div>
	);
};

export default SelectCategories;
