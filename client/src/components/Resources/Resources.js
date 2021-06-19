import React from "react";
import HomeHeaderBootstrap from "../reusableComponents/HomeHeaderBootstrap";
import ResourcesLIst from "./ResourcesList";
import StickyFooter from "../reusableComponents/stickyFooter";

const Resources = () => {
	return (
		<div id="Resources-Container-Parent">
			<div id="resources-content-container">
				<HomeHeaderBootstrap />
				<h3>Essentails</h3>
				<ResourcesLIst />
			</div>
			<StickyFooter />
		</div>
	);
};
export default Resources;
