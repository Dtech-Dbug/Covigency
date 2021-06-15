import React from "react";
import Icon from "../../icons/Postcovid.png";
import "../stylesheets/CallToAction.css";

const CallToActionCard = ({
	category,
	information,
	buttonText,
	image,
	beta,
}) => {
	return (
		<div id="Call-To-Action-Container">
			<h2>{category}</h2>

			<div className="Call-To-Action-Info-Container">
				<img src={image} alt="oops" />

				<p>{information}</p>

				<button id="cta-btn">
					{buttonText}
					<span id="beta">{beta}</span>
				</button>
			</div>
		</div>
	);
};

export default CallToActionCard;
