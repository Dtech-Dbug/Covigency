import React from "react";
import "./Category.css";

//importing images
import SelectState from "../../../BackgroundImages/Selectstate.svg";
import VaccineCard from "../../../BackgroundImages/Vaccine.svg";
import Support from "../../../BackgroundImages/support.svg";
import PostCovid from "../../../BackgroundImages/Post Covid.svg";
import VolunteerCard from "../../../BackgroundImages/Lets Work Together.svg";

//import Icons
import Compass from "../../../icons/compass.png";
import Arrow from "../../../icons/WhiteArrow.svg";
import Syringe from "../../../icons/💉.png";
import SupportIcon from "../../../icons/support icon.png";
import PostCovidIcon from "../../../icons/Postcovid.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const CategoryGrid = () => {
	const history = useHistory();

	function changeRouteToStates(e) {
		e.preventDefault();
		history.push("/states");
	}

	function vaccineRoute(e) {
		e.preventDefault();
		history.push("/vaccine");
	}

	function postCovidRoute(e) {
		e.preventDefault();
		history.push("/post-covid");
	}
	return (
		<body>
			<div class="category-block">
				<h2>Categories</h2>

				<div class="category-container">
					<div class="cat-1" onClick={changeRouteToStates}>
						<div class="cat-bg">
							<img src={SelectState} alt="" />
						</div>
						<div class="cat-text">
							<div class="cat-info">
								<h4>Select state.</h4>
								<p>
									On this category you can search for your state and resources
									based on your location.
								</p>
							</div>
							<img src={Compass} className="Icons" alt="" />
						</div>

						<img
							onClick={changeRouteToStates}
							src={Arrow}
							alt=""
							class="arrow"
						/>
					</div>

					<div class="cat-2" onClick={vaccineRoute}>
						<div class="cat-bg">
							<img src={VaccineCard} alt="" />
						</div>
						<div class="cat-text">
							<img src={Syringe} className="Icons" alt="" />
							<div class="cat-info">
								<h4>Vaccine.</h4>
								<p>
									Book your vaccine appointment and save yourself from <br />
									COVID-19.
								</p>
							</div>

							<img onClick={vaccineRoute} src={Arrow} alt="" class="arrow" />
						</div>
					</div>

					<div class="cat-4">
						<div class="cat-bg">
							<img src={Support} alt="" />
						</div>
						<div class="cat-text">
							<img src={SupportIcon} className="Icons" alt="" />
							<div class="cat-info">
								<h4>Support.</h4>
								<p>
									Support the COVID patients with your valuable donation <br />
									(Funds or time)
								</p>
							</div>

							<img src={Arrow} alt="" class="arrow" />
						</div>
					</div>

					<div class="cat-3" onClick={postCovidRoute}>
						<div class="cat-bg">
							<img src={PostCovid} alt="" />
							<img src={Arrow} alt="" class="arrow" />
						</div>
						<div class="cat-text">
							<img src={PostCovidIcon} className="Icons" alt="" />
							<div class="cat-info">
								<h4>Post Covid.</h4>
								<p>
									Get access to our helpful resources which guides you to get
									back your health after effected by COVID-19.
								</p>
							</div>
						</div>
					</div>
					<div class="cat-5">
						<div class="cat-bg">
							<img src={VolunteerCard} alt="" />
							<img src={Arrow} alt="" class="arrow" />
						</div>
						<div class="cat-text">
							<div class="cat-info">
								<h4>
									Lets work <br />
									together.
								</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</body>
	);
};

export default CategoryGrid;
