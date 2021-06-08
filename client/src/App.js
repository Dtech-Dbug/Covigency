import "./App.css";
import LandingPage from "./components/Landing";
import States from "./components/UserComponents/states";
import Cities from "./components/UserComponents/Cities";
import { path, Route } from "react-router-dom";
import Resources from "./components/UserComponents/Resources";
import Categories from "./components/UserComponents/Categories";

function App() {
	return (
		<div className="App">
			<Route path="/" exact component={LandingPage} />
			<Route path="/categories" exact component={Categories} />
			<Route path="/states" exact component={States} />
			<Route path="/cities" exact component={Cities} />
			<Route path="/resources" exact component={Resources} />
		</div>
	);
}

export default App;
