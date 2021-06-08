import React from "react";
import EmergencyIcon from "../../icons/emergencyicon.svg";
import BrowseIcon from "../../icons/Browse icon.svg";

const StickyFooter = () => {
	return (
		<footer className="sticky-footer">
			<ul>
				<li>
					<img src={EmergencyIcon} alt="Unavailable" />
				</li>
				<li>
					<img src={BrowseIcon} alt="Unavailable" />
				</li>
			</ul>
		</footer>
	);
};

export default StickyFooter;
