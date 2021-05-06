const ThumbnailImage = (props) => {
  return (
    <img
      src={props.src}
      alt="thumbnail img"
      className="thumbnail"
      onClick={() => props.toggleLargeImage()}
    />
  );
};

export default ThumbnailImage;
