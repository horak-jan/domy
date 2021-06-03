import HouseDetailsInfo from "./HouseDetailsInfo";
import ImageCarousel from "./imageCarousel/ImageCarousel";

const HouseDetailsTop = (props) => {
  const { house } = props;
  return (
    <div className="house-details-top">
      <ImageCarousel images={house.images} />
      <HouseDetailsInfo house={house} />
    </div>
  );
};

export default HouseDetailsTop;
