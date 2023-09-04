import React from "react";
import Lists from "./Lists";

const Home = ({ data }) => {
	return (
		<div className="content">
			<Lists data={data} />
		</div>
	);
};

export default Home;
