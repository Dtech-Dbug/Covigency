import "./App.css";
import LandingPage from "./components/Landing";
import States from "./components/UserComponents/states";
import Cities from "./components/UserComponents/Cities";
import { path, Route } from "react-router-dom";
import Resources from "./components/Resources/Resources";
import { VaccinePage } from "./components/UserComponents/Vaccine/VaccinePage";
import SelectCategories from "./components/UserComponents/Categories/SelectCategories";
import PostCovid from "./components/UserComponents/PostCovid/PostCovid";
import Yoga from "./components/UserComponents/PostCovid/Yoga";
import CallToActionCard from "./components/reusableComponents/CallToActionCard";
import Diet from "./components/UserComponents/PostCovid/Diet";

function App() {
	return (
		<div className="App">
			<Route path="/" exact component={LandingPage} />
			<Route path="/states" exact component={States} />
			<Route path="/cities/:slug" exact component={Cities} />
			<Route path="/resources" exact component={Resources} />
			<Route path="/categories" exact component={SelectCategories} />
			<Route path="/vaccine" exact component={VaccinePage} />
			<Route path="/post-covid" exact component={PostCovid} />
			<Route path="/yoga" exact component={Yoga} />
			<Route path="/diet" exact component={Diet} />
		</div>
	);
}

export default App;
