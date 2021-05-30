import HousePrices from "./HousePrices";

const HouseDetailsInfo = (props) => {
  const {
    name,
    sqMetresToUse,
    rooms,
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
    </div>
  );
};

export default HouseDetailsInfo;
