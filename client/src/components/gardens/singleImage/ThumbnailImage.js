const ThumbnailImage = (props) => {
  return (
    <img
      src={props.src}
      alt="thumbnail img"
      onClick={() => props.toggleLargeImage()}
    />
  );
};

export default ThumbnailImage;
