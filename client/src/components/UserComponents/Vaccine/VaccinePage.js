import React from "react";
import StickyFooter from "../../reusableComponents/stickyFooter";
import "../Vaccine/vaccine.css";
import PromotionCard from "./PromotionCard";
import VaccineInfo from "./Vaccine-Info";
import Arrow from "../../../icons/Arrow icon.svg";

export const VaccinePage = () => {
	return (
		<div id="Vaccine-Container">
			<div className="vaccine-content-container">
				<h2> {"<"} Home </h2>
				<PromotionCard />
				<VaccineInfo />
			</div>
			<StickyFooter />
		</div>
	);
};
