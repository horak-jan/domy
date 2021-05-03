import { useState } from "react";

const SingleImage = (props) => {
  const [showLargeImage, setShowLargeImage] = useState(false);

  const toggleLargeImage = (showLargeImage) => {
    setShowLargeImage(!showLargeImage);
  };
  return (
    <>
      <img src={props.src} alt="img" onClick={() => toggleLargeImage()} />

      {showLargeImage && (
        <dialog
          className="dialog"
          open
          onClick={() => toggleLargeImage(showLargeImage)}
        >
          <img
            className="opened-image"
            src={props.src}
            onClick={() => toggleLargeImage(showLargeImage)}
            alt="image"
          />
        </dialog>
      )}
    </>
  );
};

export default SingleImage;
