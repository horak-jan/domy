import BrowsePrices from "./BrowsePrices";
import RoomsAndBills from "./RoomsAndBills";

const SingleBrowseHouseDetails = (props) => {
  return (
    <div className="single-browse-house-details">
      <RoomsAndBills rooms={props.rooms} bills={props.bills} />

      <BrowsePrices
        fullHousePrices={props.fullHousePrices}
        basicHousePrices={props.basicHousePrices}
      />
    </div>
  );
};

export default SingleBrowseHouseDetails;
