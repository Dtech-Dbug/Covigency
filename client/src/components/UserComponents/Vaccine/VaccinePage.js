import React from "react";
import StickyFooter from "../../reusableComponents/stickyFooter";
import "../Vaccine/vaccine.css";
import PromotionCard from "./PromotionCard";
import VaccineInfo from "./Vaccine-Info";

export const VaccinePage = () => {
	return (
		<div id="Vaccine-Container">
			<div className="vaccine-content-container">
				<PromotionCard />
				<VaccineInfo />
			</div>
			<StickyFooter />
		</div>
	);
};
