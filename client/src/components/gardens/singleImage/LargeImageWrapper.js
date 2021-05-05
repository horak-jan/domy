import OpenedLargeImage from "./OpenedLargeImage";

const LargeImageWrapper = (props) => {
  return (
    <div
      className="large-image"
      onClick={() => props.toggleLargeImage(props.showLargeImage)}
    >
      <OpenedLargeImage
        showLargeImage={props.showLargeImage}
        toggleLargeImage={props.toggleLargeImage}
        src={props.src}
      />
    </div>
  );
};

export default LargeImageWrapper;
