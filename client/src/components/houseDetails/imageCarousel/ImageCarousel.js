import { useState } from "react";
import LargeImage from "./LargeImage";
import RestOfHouseImages from "./RestOfHouseImages";

const ImageCarousel = (props) => {
  const { images } = props;
  // set first image as a large one
  const [largeImage, setLargeImage] = useState(images[[0]]);

  // all house images except large one
  let restOfHouseImages = images.filter((image) => image !== largeImage);

  return (
    <div className="image-carousel">
      <LargeImage largeImage={largeImage} />

      <RestOfHouseImages
        setLargeImage={setLargeImage}
        restOfHouseImages={restOfHouseImages}
      />
    </div>
  );
};

export default ImageCarousel;
