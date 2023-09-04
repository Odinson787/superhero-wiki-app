import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./mediaqueries.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import DetailsPage from "./Details Page/DetailsPage";
import supeData from "./data/db";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Index = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home data={supeData} />} />
				<Route path="/supe/:id" element={<DetailsPage data={supeData} />} />
			</Routes>
		</Router>
	);
};

root.render(
	<React.StrictMode>
		<Index />
	</React.StrictMode>
);
