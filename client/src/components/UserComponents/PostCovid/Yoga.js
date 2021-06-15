import React from "react";
import RoundArrow from "../../../icons/Arrow.svg";
import PromotionCard from "../../reusableComponents/PromotionCard";

const Yoga = () => {
	const paragraph =
		"Leher therefore defines a robuts child protection system as one where families , communities , NGOs and government work together and in a coordinated manner to anticipate , prevent and respond to child protection violations.";

	return (
		<div id="Yoga-Container">
			<div className="yoga-content-container">
				<h2> {"<"} Home </h2>

				<PromotionCard
					header="Leher"
					extension=".org"
					img={RoundArrow}
					paragraph={paragraph}
				/>
			</div>
		</div>
	);
};

export default Yoga;
