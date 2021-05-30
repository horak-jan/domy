import SingleBrowseHouseDetails from "./SingleBrowseHouseDetails";
import { useHistory } from "react-router-dom";

import { useStateValue } from "../../state";
const SingleBrowseHouse = (props) => {
  const { house } = props;
  const history = useHistory();
  const [{ selectedHouseId }, dispatch] = useStateValue();

  const pickThisHouse = (houseId) => {
    try {
      dispatch({
        type: "pickThisHouse",
        setHouseId: houseId,
      });

      //redirect to details of picked house
      history.push("/detail-domu");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="single-browse-house">
      <h2>{house.name}</h2>
      <img alt="single house" className="main-house-image" src={house.image} />

      <SingleBrowseHouseDetails
        rooms={house.rooms}
        bills={house.bills}
        id={house.id}
        pickThisHouse={pickThisHouse}
        fullHousePrices={house.fullHousePrices}
        basicHousePrices={house.basicHousePrices}
      />
    </div>
  );
};

export default SingleBrowseHouse;
