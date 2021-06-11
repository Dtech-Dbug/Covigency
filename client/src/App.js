import "./App.css";
import LandingPage from "./components/Landing";
import States from "./components/UserComponents/states";
import Cities from "./components/UserComponents/Cities";
import { path, Route } from "react-router-dom";
import Resources from "./components/UserComponents/Resources";
import { VaccinePage } from "./components/UserComponents/Vaccine/VaccinePage";
import SelectCategories from "./components/UserComponents/Categories/SelectCategories";

function App() {
	return (
		<div className="App">
			<Route path="/" exact component={LandingPage} />
			<Route path="/states" exact component={States} />
			<Route path="/cities/:slug" exact component={Cities} />
			<Route path="/resources" exact component={Resources} />
			<Route path="/vaccine" exact component={VaccinePage} />
			<Route path="/categories" exact component={SelectCategories} />
		</div>
	);
}

export default App;
