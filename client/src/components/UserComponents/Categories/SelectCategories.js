import React from "react";
import HomeHeaderBootstrap from "../../reusableComponents/HomeHeaderBootstrap";
import CategoryGrid from "./CategoryGrid";

const SelectCategories = () => {
	return (
		<div id="Select-Categories-Container-Parent">
			<div className="Select-Categories-Content-Container">
				<CategoryGrid />
			</div>
		</div>
	);
};

export default SelectCategories;
