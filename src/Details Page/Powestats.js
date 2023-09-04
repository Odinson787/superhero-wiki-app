import React from "react";

const Powestats = ({ data }) => {
	return (
		<div className="tabs-data powerstats">
			<div className="powerstats-rows">
				<h4>Intelligence</h4>
				<h4>{data.intelligence}</h4>
			</div>
			<div className="powerstats-rows">
				<h4>Strength</h4>
				<h4>{data.strength}</h4>
			</div>
			<div className="powerstats-rows">
				<h4>Speed</h4>
				<h4>{data.speed}</h4>
			</div>
			<div className="powerstats-rows">
				<h4>Durability</h4>
				<h4>{data.durability}</h4>
			</div>
			<div className="powerstats-rows">
				<h4>Power</h4>
				<h4>{data.power}</h4>
			</div>
			<div className="powerstats-rows">
				<h4>Combat</h4>
				<h4>{data.combat}</h4>
			</div>
		</div>
	);
};

export default Powestats;
