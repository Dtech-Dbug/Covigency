import React from "react";
import StickyFooter from "../../reusableComponents/stickyFooter";
import "../Vaccine/vaccine.css";
import PromotionCard from "../../reusableComponents/PromotionCard";
import VaccineInfo from "./Vaccine-Info";
// Assets
import RoundArrow from "../../../icons/Arrow.svg";

export const VaccinePage = () => {
	const paragraph =
		"In a country that is home to the world’s second-largest population when one of its largest enterprises providentially happens to be a philanthropic organisation, it raises hopes for a promising and sustainable future";
	return (
		<div id="Vaccine-Container" className="main-container">
			<div id="content-container" className="container">
				<div className="headerText">			
					<h1 id="content-container-heading"> HOME </h1>
				</div>

				<PromotionCard
					header="NBSC FOUNDATION"
					img={RoundArrow}
					paragraph={paragraph}
				/>
				<VaccineInfo />
			</div>
			<StickyFooter />
		</div>
	);
};
//<PromotionCard />
