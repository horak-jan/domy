import SingleImage from "../gardens/singleImage/SingleImage";
const Gallery = (props) => {
  const { images } = props;
  return (
    <div className="gallery">
      {images.map((image) => (
        <SingleImage src={image} key={image} />
      ))}
    </div>
  );
};

export default Gallery;
