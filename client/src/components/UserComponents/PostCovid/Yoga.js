import React from "react";
import RoundArrow from "../../../icons/Arrow.svg";
import PromotionCard from "../../reusableComponents/PromotionCard";
import CallToActionCard from "../../reusableComponents/CallToActionCard";
import StickyFooter from "../../reusableComponents/stickyFooter";
//Assets 
import YogaIcon from "../../../icons/Postcovid.png";
import PDF from "../../../PDFs/yoga-guidelines.pdf";

const Yoga = () => {
	const paragraph =
		"Leher therefore defines a robuts child protection system as one where families , communities , NGOs and government work together and in a coordinated manner to anticipate , prevent and respond to child protection violations.";

	const information =
		"Yoga  is a discipline on an extremely subtle science , which focuses on bringing harmony between mind and body.";
	return (
		<div id="Yoga-Container">
			<div id="content-container">
				<h2 id="content-container-heading"> {"<"} Home </h2>
				<PromotionCard
					header="Leher"
					extension=".org"
					img={RoundArrow}
					paragraph={paragraph}
					LinkToOrg="https://leher.org/"
				/>

				<CallToActionCard
					category="Yoga"
					image={YogaIcon}
					buttonText="Download Yoga PDF"
					beta="Beta"
					information={information}
					link={PDF}
				/>
			</div>
			<StickyFooter />
		</div>
	);
};

export default Yoga;
