import React from "react";
import HomeHeaderBootstrap from "../../reusableComponents/HomeHeaderBootstrap";
import HomeHeaderWithCSS from "../../reusableComponents/HomeHeaderWithCSS";
import StickyFooter from "../../reusableComponents/stickyFooter";
import CategoryGrid from "./CategoryGrid";

const SelectCategories = () => {
	return (
		<div id="Select-Categories-Container-Parent">
			<div className="Select-Categories-Content-Container">
				<HomeHeaderBootstrap />
				<CategoryGrid />
			</div>
		</div>
	);
};

export default SelectCategories;
