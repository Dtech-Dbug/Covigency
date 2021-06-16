import React from "react";
import RoundArrow from "../../../icons/Arrow.svg";
import PromotionCard from "../../reusableComponents/PromotionCard";
import CallToActionCard from "../../reusableComponents/CallToActionCard";
import StickyFooter from "../../reusableComponents/stickyFooter";

//icons
import Food from "../../../icons/food.png";
const Diet = () => {
	const paragraph =
		"Save Indian Farmers(SIF) promotes identification and analysis of important issues affecting farmers , awareness about farmer suicides , helping the families of the victims by funding & providing sustainabale means of livelihood.";

	const information =
		"Good nutrition is vital for maintaining good health status , particularly at this point of time when your immune system has taken a setback and is in a weaker state after being affected by the deadly virus.";
	return (
		<div id="Diet-Container">
			<div id="content-container">
				<h2 id="content-container-heading">{"< "}Home</h2>
				<PromotionCard
					header="Save India Farmers"
					extension=".org"
					paragraph={paragraph}
					img={RoundArrow}
					LinkToOrg="https://www.saveindianfarmers.org/#"
				/>

				<CallToActionCard
					category="Diet"
					image={Food}
					information={information}
					buttonText="Get Newsletter"
				/>
			</div>
		</div>
	);
};

export default Diet;
