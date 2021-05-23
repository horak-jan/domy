import SingleBrowseHouse from "./SingleBrowseHouse";

const BrowseHouses = (props) => {
  return (
    <div className="browse-houses">
      <SingleBrowseHouse house={props.house} />
    </div>
  );
};

export default BrowseHouses;
