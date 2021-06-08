import React from "react";
import HomeHeaderBootstrap from "../reusableComponents/HomeHeaderBootstrap";

import ResourcesLIst from "./ResourcesList";

const Resources = () => {
	return (
		<div className="fluid-container">
			<div className="row">
				<div className="col-md-12 ml-1 pr-3">
					<HomeHeaderBootstrap />
				</div>
			</div>

			<ResourcesLIst />
		</div>
	);
};
export default Resources;
