import { useState } from "react";

const SingleImage = (props) => {
  const [showLargeImage, setShowLargeImage] = useState(false);

  const toggleLargeImage = (showLargeImage) => {
    setShowLargeImage(!showLargeImage);
  };
  return (
    <>
      <img
        src={props.src}
        alt="thumbnail img"
        onClick={() => toggleLargeImage()}
      />

      {showLargeImage && (
        <div
          className="large-image"
          onClick={() => toggleLargeImage(showLargeImage)}
        >
          <img
            className="opened-large-image"
            src={props.src}
            onClick={() => toggleLargeImage(showLargeImage)}
            alt="opened-large-image"
          />
        </div>
      )}
    </>
  );
};

export default SingleImage;
