import { useState } from "react";
import LargeImageWrapper from "./LargeImageWrapper";
import ThumbnailImage from "./ThumbnailImage";

const SingleImage = (props) => {
  const [showLargeImage, setShowLargeImage] = useState(false);

  const toggleLargeImage = (showLargeImage) => {
    setShowLargeImage(!showLargeImage);
  };
  return (
    <>
      {/* <img
        src={props.src}
        alt="thumbnail img"
        onClick={() => toggleLargeImage()}
      /> */}
      <ThumbnailImage toggleLargeImage={toggleLargeImage} src={props.src} />

      {showLargeImage && (
        // <div
        //   className="large-image"
        //   onClick={() => toggleLargeImage(showLargeImage)}
        // >
        //   <img
        //     className="opened-large-image"
        //     src={props.src}
        //     onClick={() => toggleLargeImage(showLargeImage)}
        //     alt="opened-large-image"
        //   />
        // </div>
        <LargeImageWrapper
          showLargeImage={showLargeImage}
          toggleLargeImage={toggleLargeImage}
          src={props.src}
        />
      )}
    </>
  );
};

export default SingleImage;
