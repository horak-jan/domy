import HouseDetailsMiddle from "../components/houseDetails/HouseDetailsMiddle";
import ContactMiddle from "../components/contact/ContactMiddle";
import HouseDetailsTop from "../components/houseDetails/HouseDetailsTop";
import HouseDetailsBottom from "../components/houseDetails/HouseDetailsBottom";

const HouseDetails = () => {
  return (
    <div className="house-details">
      <HouseDetailsTop />
      <HouseDetailsMiddle />
      <ContactMiddle />
      <HouseDetailsBottom />
    </div>
  );
};

export default HouseDetails;
