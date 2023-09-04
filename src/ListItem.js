import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ data }) => {
	return (
		<Link to={"/supe/" + data._id}>
			<li>
				<img src={data.image} alt="" />
				<h4>{data.name}</h4>
			</li>
		</Link>
	);
};

export default ListItem;
