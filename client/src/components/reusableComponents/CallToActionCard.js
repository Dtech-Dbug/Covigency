import React from "react";
import Icon from "../../icons/Postcovid.png";
import "../stylesheets/CallToAction.css";

const CallToActionCard = ({
	category,
	information,
	buttonText,
	image,
	beta,
	link,
}) => {
	return (
		<div id="Call-To-Action-Container">
			<h2>{category}</h2>

			<div className="Call-To-Action-Info-Container">
				<img src={image} alt="oops" />

				<p>{information}</p>

				<a href={link} download="Yoga">
					<button id="cta-btn">
						{buttonText}
						<span id="beta">{beta}</span>
					</button>
				</a>
			</div>
		</div>
	);
};

export default CallToActionCard;
