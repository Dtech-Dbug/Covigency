import React from "react";
import BrowseIcon from "../images/Browse icon.svg";
import EmergencyIcon from "../images/emergencyicon.svg";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const States = () => {
	return (
		<div className="StatesContainer">
			<div className="headerText">
				<h1>HOME</h1>

				<div className="state-search-input">
					<i class="fa fa-search"></i>
					<input type="text" placeholder="Search Your State here"></input>
				</div>
			</div>

			<div className="states-content-container"></div>

			<footer>
				<ul>
					<li>
						<img src={EmergencyIcon} alt="Unavailable" />
					</li>
					<li>
						<img src={BrowseIcon} alt="Unavailable" />
					</li>
				</ul>
			</footer>
		</div>
	);
};

export default States;
