import SingleBrowseHouse from "./SingleBrowseHouse";

const BrowseHouses = (props) => {
  const { allHouses } = props;
  return (
    <div className="browse-houses">
      {allHouses.map((house) => (
        <SingleBrowseHouse key={house.name} house={house} />
      ))}
    </div>
  );
};

export default BrowseHouses;
