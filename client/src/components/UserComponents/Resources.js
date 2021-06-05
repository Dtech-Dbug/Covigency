import React from "react";
import Header from "../reusableComponents/header";
import ResourcesLIst from "./ResourcesList";

const Resources = () => {
	return (
		<div className="fluid-container">
			<div className="row">
				<div className="col-md-12 ml-1 pr-3">
					<Header />
				</div>
			</div>

			<ResourcesLIst />
		</div>
	);
};
export default Resources;
