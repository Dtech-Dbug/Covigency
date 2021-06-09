import React from "react";
import "../Vaccine/vaccine.css";
import CowinButton from "../../../icons/CowinButton.png";

const VaccineInfo = () => {
	return (
		<div id="Parent-Container-vaccine-Info">
			<h2>Vaccine</h2>

			<div className="vaccine-info-container">
				<p>
					The goverrnment has announced a priority campaign to get second doses
					to people in time. Check out the <span>press note here</span>
				</p>

				<p>
					The government has announced priority vaccination for those above 45
					in government centres. Online registration is mandatory ,and no
					walk-ins will be entertained. Access the press note <span>here.</span>
				</p>

				<p>
					Apollo has setup <span>this tool</span> so that you can get up-to-date
					information on the vaccine rollout throughout the country.
				</p>

				<p>
					Details of updated vaccination centers with available stock will be
					updated once the state government releases an official statement.
				</p>

				<p>
					Vaccine registration have begun for individuals who are 18+, please
					access the CoWIN user manual for more detials below.
				</p>

				<a
					href="https://www.cowin.gov.in/home"
					target="_blank"
					rel="noreferrer"
				>
					<img src={CowinButton} alt="" />
				</a>
			</div>
		</div>
	);
};

export default VaccineInfo;
