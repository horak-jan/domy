import Loading from "../utils/Loading";
import SingleImage from "./singleImage/SingleImage";

const GardenImages = (props) => {
  const { images } = props;

  return (
    <div className="garden-images">
      {images.map((image) => (
        <SingleImage key={image} src={image} />
      ))}
    </div>
  );
};

export default GardenImages;
