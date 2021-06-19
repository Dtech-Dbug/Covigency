import React from "react";

//importing style exclusive for this component
import "../Resources/resourceList.css";

//import the icons
import ArrowIcon from "../../icons/Arrow icon.svg";
import Blood from "../../icons/blood.png";
import Meds from "../../icons/💊.png";
import Microscope from "../../icons/🔬.png";
import Oxygen from "../../icons/😷.png";
import Injection from "../../icons/💉.png";
import Bed from "../../icons/bed.png";
import Ambulance from "../../icons/Ambulance.png";
import Epidemic from "../../icons/Epidemic.png";

//order
// "💉": "Vaccine",
// "🔬": "COVID Testing",
// "😷": "Oxygen",
// "🛏": "Hospital Beds",
// "💊": "Pharmacies",
// "🚑": "Ambulance",
// "🩸": "Plasma / Blood Bank",

const resourceItems = [
	{
		id: 1,
		src: Bed,
		title: "Hospital Beds",
		description: "Find information about availability of Hospital Beds.",
	},
	{
		id: 2,
		src: Meds,
		title: "Pharmacies",
		description:
			"Find nearest pharm. for drugs other than Ramdesivir , Tocillzumab.",
	},
	{
		id: 3,
		src: Ambulance,
		title: "Ambulance",
		description:
			"Find information about availability of nearest  ambulance services",
	},
	{
		id: 4,
		src: Blood,
		title: "Plasma / Blood",
		description: "Find information about availability of Blood/Plasma.",
	},
	{
		id: 5,
		src: Epidemic,
		title: "Epidemic Crisis",
		description: "Sponsor a child",
	},
];

const ResourcesLIst = () => {
	return (
		<div className="Container-wrapper">
			<h3>Essentials</h3>
			<div className="resources-grid-container">
				{resourceItems.map(({ id, src, title, description }) => {
					return (
						<div className="child-div">
							<img src={src} alt="oops" />

							<div className="information">
								<h3>{title}</h3>
								<p>{description}</p>
							</div>
						</div>
					);
				})}
			</div>
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
