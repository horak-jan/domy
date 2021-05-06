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
      <ThumbnailImage toggleLargeImage={toggleLargeImage} src={props.src} />

      {showLargeImage && (
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
