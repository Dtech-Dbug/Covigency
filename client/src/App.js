import "./App.css";
import LandingPage from "./components/Landing";
import { path, Route } from "react-router-dom";
import States from "./components/states";
function App() {
	return (
		<div className="App">
			<Route path="/" exact component={LandingPage} />
			<Route path="/states" exact component={States} />
		</div>
	);
}

export default App;
