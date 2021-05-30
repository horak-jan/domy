import house from "./../../housetest1.json";
import HouseDetailsInfo from "./HouseDetailsInfo";
import ImageCarousel from "./imageCarousel/ImageCarousel";

const HouseDetailsTop = () => {
  // fetch house
  // const [selectedHouseId, dispatch] = useStateValue();

  return (
    <div className="house-details-top">
      <ImageCarousel images={house.images} />
      <HouseDetailsInfo house={house} />
    </div>
  );
};

export default HouseDetailsTop;
