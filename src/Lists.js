import React from "react";
import ListItem from "./ListItem";

const Lists = ({ data }) => {
	return (
		<ul className="list">
			{data.map((item) => (
				<ListItem key={item._id} data={item} />
			))}
		</ul>
	);
};

export default Lists;
