import React from "react";
import "../Vaccine/vaccine.css";
import vaccineBG from "../../../BackgroundImages/Rectangle 11.svg";
import Arrow from "../../../icons/Arrow.svg";

const PromotionCard = () => {
	return (
		<div className="promotion-card">
			<div className="promoted-org">
				<h4>Join</h4>
				<h1>NBSC Foundation</h1>
			</div>

			<div className="promotion-intro">
				<p>
					In a country that is home to the world’s second-largest population,
					when one of its largest enterprises providentially happens to be a
					philanthropic organisation, it raises hopes for a promising and
					sustainable future
				</p>
			</div>

			<div className="promotion-footer-middle">Promoted ad*</div>
			<img src={Arrow} alt="oops" />
		</div>
	);
};

export default PromotionCard;
