import React, { useState } from "react";
import Tabs from "./Tabs";

const InfoBox = ({ info }) => {
	const [activeTab, setActiveTab] = useState(1);

	const handleTabChange = (index) => {
		setActiveTab(index);
	};

	return (
		<div className="infoBox">
			<h2 className="title">{info.name}</h2>
			<div className="options-nav">
				<ul>
					<li
						className={activeTab === 1 ? "active" : ""}
						onClick={() => handleTabChange(1)}
					>
						Powerstats
					</li>
					<li
						className={activeTab === 2 ? "active" : ""}
						onClick={() => handleTabChange(2)}
					>
						Biography
					</li>
					<li
						className={activeTab === 3 ? "active" : ""}
						onClick={() => handleTabChange(3)}
					>
						Appearance
					</li>
					<li
						className={activeTab === 4 ? "active" : ""}
						onClick={() => handleTabChange(4)}
					>
						Connections
					</li>
				</ul>
			</div>
			<div className="tabs">
				<Tabs info={info} activeTab={activeTab} />
			</div>
		</div>
	);
};

export default InfoBox;
