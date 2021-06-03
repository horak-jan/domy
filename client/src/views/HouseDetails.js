import HouseDetailsMiddle from "../components/houseDetails/HouseDetailsMiddle";
import ContactMiddle from "../components/contact/ContactMiddle";
import HouseDetailsTop from "../components/houseDetails/HouseDetailsTop";
import HouseDetailsBottom from "../components/houseDetails/HouseDetailsBottom";
import { useStateValue } from "../state";
import Loading from "../components/utils/Loading";
import ShowErrorMessage from "../components/utils/ShowErrorMessage";
import useDbData from "../components/utils/useDbData";

const HouseDetails = () => {
  const [{ selectedHouseId }, dispatch] = useStateValue();

  const [loadedData, isLoading, hasError] = useDbData(
    `house/${selectedHouseId}`
  );
  const { house } = loadedData;

  return (
    <div className="house-details">
      {isLoading ? (
        <Loading />
      ) : hasError ? (
        <ShowErrorMessage />
      ) : (
        <HouseDetailsTop house={house} />
      )}
      <HouseDetailsMiddle />
      <ContactMiddle />
      <HouseDetailsBottom />
    </div>
  );
};

export default HouseDetails;
