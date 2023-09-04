import React from "react";

const Appearance = ({ data }) => {
	return (
		<div className="tabs-data appearance">
			<ul>
				<li>
					<h4>Gender</h4>
					<h4>{data.gender}</h4>
				</li>
				<li>
					<h4>Race</h4>
					<h4>{data.race}</h4>
				</li>
				<li>
					<h4>Height</h4>
					<h4>{data.height[0]}</h4>
				</li>
				<li>
					<h4>Weight</h4>
					<h4>{data.weight}</h4>
				</li>
				<li>
					<h4>Eye Color</h4>
					<h4>{data["eye-color"]}</h4>
				</li>
				<li>
					<h4>Hair Color</h4>
					<h4>{data["hair-color"]}</h4>
				</li>
			</ul>
		</div>
	);
};

export default Appearance;
