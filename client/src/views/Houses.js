import house from "../basicHouseInfo.json";
import BrowseHouses from "../components/houses/BrowseHouses";
import FilterAndSort from "../components/houses/FilterAndSort/FilterAndSort";
import ShowPerPage from "../components/houses/ShowPerPage";
const Houses = () => {
  return (
    <div className="houses">
      <h1>Katalog nízkoenergetických zděných domů a dřevostaveb na klíč</h1>

      <FilterAndSort />

      <ShowPerPage />

      <BrowseHouses house={house} />
    </div>
  );
};

export default Houses;
