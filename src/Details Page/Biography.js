import React from "react";

const Biography = ({ data }) => {
	return (
		<div className="tabs-data biography">
			<ul>
				<li>
					<h4>Full Name:</h4>
					<h4>{data["full-name"]}</h4>
				</li>
				<li>
					<h4>Alter Egos:</h4>
					<h4>{data["alter-egos"]}</h4>
				</li>
				<li>
					<h4>Aliases:</h4>
					<h4>{data.aliases}</h4>
				</li>
				<li>
					<h4>Place of Birth:</h4>
					<h4>{data["place-of-birth"]}</h4>
				</li>
				<li>
					<h4>First Appearance:</h4>
					<h4>{data["first-appearance"]}</h4>
				</li>
				<li>
					<h4>Publisher:</h4>
					<h4>{data.publisher}</h4>
				</li>
			</ul>
		</div>
	);
};

export default Biography;
