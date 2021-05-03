import SingleImage from "./SingleImage";

const GardenImages = (props) => {
  const { isLoading, images } = props;

  return (
    <div className="garden-images">
      {isLoading ? (
        <p style={{ textAlign: "center" }}>Načítám</p>
      ) : (
        images.map((image) => <SingleImage key={image} src={image} />)
      )}
    </div>
  );
};

export default GardenImages;
