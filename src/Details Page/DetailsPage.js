import { useParams } from "react-router-dom";
import ImageBox from "./ImageBox";
import InfoBox from "./InfoBox";

const DetailsPage = ({ data }) => {
	const { id } = useParams();
	const result = data.find((item) => item._id === id);

	return (
		<div className="details">
			<ImageBox image={result.image} />
			<InfoBox info={result} />
		</div>
	);
};

export default DetailsPage;
