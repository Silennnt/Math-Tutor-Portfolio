import React from "react";
import BottomNav from "./components/BottomNav";
import Hero from "./components/Hero";
import About from "./components/About";
import "./index.css";

function App() {
	return (
		<div>
			<Hero />
			<About />
			<BottomNav />
		</div>
	);
}

export default App;
