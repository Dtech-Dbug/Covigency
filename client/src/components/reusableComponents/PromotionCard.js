import React from "react";
import "../stylesheets/PromotionCard.css";

const PromotionCard = ({ header, img, paragraph, extension, LinkToOrg }) => {
	return (
		<a href={LinkToOrg} target="_blank">
			<div className="promotion-card">
				<div className="promoted-org">
					<h4>Join</h4>
					<h1>
						{header} <span>{extension}</span>{" "}
					</h1>
				</div>

				<div className="promotion-intro">
					<p>{paragraph}</p>
				</div>

				<div className="promotion-footer-middle">Promoted ad*</div>
				<img src={img} alt="oops" />
			</div>
		</a>
	);
};

export default PromotionCard;
