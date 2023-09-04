import React from "react";

const Connections = ({ data }) => {
	return (
		<div className="tabs-data connections">
			<div className="rows">
				<h4>Group Affiliation</h4>
				<h4>{data["group-affiliation"]}</h4>
			</div>
			<div className="rows">
				<h4>Relatives</h4>
				<h4>{data["relatives"]}</h4>
			</div>
		</div>
	);
};

export default Connections;
