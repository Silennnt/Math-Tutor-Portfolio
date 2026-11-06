import React from "react";
import BottomNav from "./components/BottomNav";
import FloatingMath from "./components/FloatingMath";
import Hero from "./components/Hero";
import About from "./components/About";
import Offer from "./components/Offer";
import Materials from "./components/Materials";
import Pricing from "./components/Pricing";
import { useScrollAnimations } from "./utils/useScrollAnimations";
import "./index.css";

function App() {
	useScrollAnimations();
	return (
		<div>
			<FloatingMath />
			<Hero />
			<About />
			<Offer />
			<Materials />
			<Pricing />
			<BottomNav />
		</div>
	);
}

export default App;
