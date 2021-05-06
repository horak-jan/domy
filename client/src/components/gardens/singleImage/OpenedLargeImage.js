const OpenedLargeImage = (props) => {
  return (
    <img
      className="gallery-opened-large-image"
      src={props.src}
      onClick={() => props.toggleLargeImage(props.showLargeImage)}
      alt="opened-large-image"
    />
  );
};

export default OpenedLargeImage;
