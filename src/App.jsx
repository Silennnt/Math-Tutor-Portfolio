import React from "react";
import BottomNav from "./components/BottomNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Offer from "./components/Offer";
import "./index.css";

function App() {
	return (
		<div>
			<Hero />
			<About />
			<Offer />
			<BottomNav />
		</div>
	);
}

export default App;
