import React from "react";

const ImageBox = ({ image }) => {
	return (
		<div className="image">
			<img src={image} alt="" />
		</div>
	);
};

export default ImageBox;
