import React from "react";

//importing style exclusive for this component
import "../stylesheets/resourceList.css";

//import the icons
import ArrowIcon from "../../images/Arrow icon.svg";
import Blood from "../../images/blood.png";
import Meds from "../../images/💊.png";
import Microscope from "../../images/🔬.png";
import Oxygen from "../../images/😷.png";
import Injection from "../../images/💉.png";
import Bed from "../../images/bed.png";

//order
// "💉": "Vaccine",
// "🔬": "COVID Testing",
// "😷": "Oxygen",
// "🛏": "Hospital Beds",
// "💊": "Pharmacies",
// "🚑": "Ambulance",
// "🩸": "Plasma / Blood Bank",

const resourceItems = [
	{ id: 1, src: Injection, title: "Vaccine" },
	{ id: 2, src: Microscope, title: "COVID Testing" },
	{ id: 3, src: Oxygen, title: "Oxygen" },
	{ id: 4, src: Bed, title: "Hospital Beds" },
	{ id: 5, src: Meds, title: "Pharmacies" },
	{ id: 6, src: Blood, title: "Plasma / Blood Bank" },
];

const ResourcesLIst = () => {
	return (
		<div className="Main-Container">
			{resourceItems.map(({ id, src, title }) => {
				return (
					<div className="list">
						<div key={id} className="emoji-and-title">
							<img src={src} alt="..." />

							<h2 style={{ color: "white" }}>{title}</h2>
						</div>

						<div className="side-arrow">
							<img src={ArrowIcon} alt=">" />
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ResourcesLIst;

/*
<Menu
						onClick={handleClick}
						style={{
							width: "90%",
							boxSizing: "border-box",
							background: "#151515",
							color: "white",
						}}
						mode="vertical"
					>
						<SubMenu key="sub1" icon="🩸" title="Navigation One"></SubMenu>
						<SubMenu
							style={{ borderBottom: "2px solid black" }}
							key="sub2"
							icon={<AppstoreOutlined />}
							title="Navigation Two"
						></SubMenu>
						<SubMenu
							key="sub4"
							icon={<SettingOutlined />}
							title="Navigation Three"
						></SubMenu>
					</Menu>



                    	{Object.keys(resourceItems).map((emojis, i) => {
				return (
					<div className="list">
						{Object.values(resourceItems).map((options, i) => {
							return (
								<div
									className="emoji-and-option"
									style={{ background: "crimson" }}
								>
									{emojis}
									<h2>{options}</h2>
								</div>
							);
						})}
					</div>
				);
			})}
                    */
