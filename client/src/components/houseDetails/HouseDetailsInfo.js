import HouseDimensions from "./HouseDimensions";
import HousePrices from "./HousePrices";

const HouseDetailsInfo = (props) => {
  const {
    name,
    sqMetresToUse,
    rooms,
    dimensions,
    sqMetresToBuild,
    fullHousePrices,
    basicHousePrices,
  } = props.house;
  return (
    <div className="house-details-info">
      <h1>{name}</h1>
      <HousePrices
        fullHousePrices={fullHousePrices}
        basicHousePrices={basicHousePrices}
      />
      <HouseDimensions
        sqMetresToUse={sqMetresToUse}
        rooms={rooms}
        dimensions={dimensions}
        sqMetresToBuild={sqMetresToBuild}
      />
    </div>
  );
};

export default HouseDetailsInfo;
