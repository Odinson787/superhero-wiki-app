import React from "react";
import Powestats from "./Powestats";
import Biography from "./Biography";
import Appearance from "./Appearance";
import Connections from "./Connections";

const Tabs = ({ info, activeTab }) => {
	if (activeTab === 1) {
		return <Powestats data={info.powerstats} />;
	}
	if (activeTab === 2) {
		return <Biography data={info.biography} />;
	}
	if (activeTab === 3) {
		return <Appearance data={info.appearance} />;
	}
	if (activeTab === 4) {
		return <Connections data={info.connections} />;
	}
};

export default Tabs;
