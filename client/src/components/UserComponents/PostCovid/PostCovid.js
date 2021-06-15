import React from "react";
import PostCovidIcon from "../../../icons/Postcovid.png";
import HomeHeaderBootstrap from "../../reusableComponents/HomeHeaderBootstrap";
import StickyFooter from "../../reusableComponents/stickyFooter";
import "./PostCovid.css";
const PostCovid = () => {
	return (
		<div id="Post-Covid-Container">
			<HomeHeaderBootstrap />

			<div className="Post-Covid-Content-Container">
				<div className="Post-Covid-Flex-Container">
					<div className="yoga">
						<img src={PostCovidIcon} alt="oops" />

						<div className="information">
							<p>Hello Let us start yoga</p>
						</div>
					</div>

					<div className="food">
						<div className="image">
							<img src={PostCovidIcon} alt="oops" />
						</div>
						<div className="information">
							<p>Hello Let us start yoga</p>
						</div>
					</div>
				</div>
			</div>
			<StickyFooter />
		</div>
	);
};

export default PostCovid;
