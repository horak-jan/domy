import SingleBrowseHouseDetails from "./SingleBrowseHouseDetails";

const SingleBrowseHouse = (props) => {
  const { house } = props;
  return (
    <div className="single-browse-house">
      <h2>{house.name}</h2>
      <img alt="single house" className="main-house-image" src={house.image} />

      <SingleBrowseHouseDetails
        rooms={house.rooms}
        bills={house.bills}
        fullHousePrices={house.fullHousePrices}
        basicHousePrices={house.basicHousePrices}
      />
    </div>
  );
};

export default SingleBrowseHouse;
