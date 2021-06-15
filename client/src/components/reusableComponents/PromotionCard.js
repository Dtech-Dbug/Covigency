import React from "react";
import "../stylesheets/PromotionCard.css";

const PromotionCard = ({ header, img, paragraph }) => {
	return (
		<div className="promotion-card">
			<div className="promoted-org">
				<h4>Join</h4>
				<h1>{header}</h1>
			</div>

			<div className="promotion-intro">
				<p>{paragraph}</p>
			</div>

			<div className="promotion-footer-middle">Promoted ad*</div>
			<img src={img} alt="oops" />
		</div>
	);
};

export default PromotionCard;
