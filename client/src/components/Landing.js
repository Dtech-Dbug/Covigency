import "../App.css";
import logo from "../icons/covigency.svg";
import { Link } from "react-router-dom";

function LandingPage() {
	return (
		<div className="LandingPage">
			<header>
				<img src={logo} alt="Opps" />
				<figcaption>
					<span className="subHeading-by">By</span>
					<span className="subHeading">NBSC</span>
					<span className="subHeading">FOUNDATION</span>
				</figcaption>
			</header>

			<footer>
				<div className="button-wrap">
					<Link to="/states">
						<button>
							<p style={{ color: "white" }}>Get Started</p>
						</button>
					</Link>
				</div>
				<p className="footer-footer" style={{ color: "white" }}>
					By getting started you accept our{" "}
					<span>
						<b>Terms & Conditions</b>
					</span>
				</p>
			</footer>
		</div>
	);
}

export default LandingPage;

//<details style={{ color: "white" }}>hello</details>
//<button>Save</button>
