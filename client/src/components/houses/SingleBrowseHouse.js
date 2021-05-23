import BrowsePrices from "./BrowsePrices";

const SingleBrowseHouse = (props) => {
  const { house } = props;
  return (
    <div className="single-browse-house">
      <h2>{house.name}</h2>
      <img alt="single house" src={house.image} />
      <p>Dispozice domu: {house.rooms}</p>
      <p>Provozní náklady: {house.bills}</p>

      <BrowsePrices
        fullHousePrices={house.fullHousePrices}
        basicHousePrices={house.basicHousePrices}
      />
    </div>
  );
};

export default SingleBrowseHouse;
