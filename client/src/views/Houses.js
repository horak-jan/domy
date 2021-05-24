import { useState } from "react";
import allHouses from "../basicHouseInfo.json";
import BrowseHouses from "../components/houses/BrowseHouses";
import BrowseWrapper from "../components/houses/BrowseWrapper";
import FilterAndSort from "../components/houses/FilterAndSort/FilterAndSort";
import Pagination from "../components/utils/Pagination/Pagination";
import PaginationButtons from "../components/utils/Pagination/PaginationButtons";
import ShowPerPagePicker from "../components/utils/Pagination/ShowPerPagePicker";

const Houses = () => {
  const [perPage, setPerPage] = useState(6);
  const [activeFilters, setActiveFilters] = useState([]);
  // const [
  //   firstHouseActualPage,
  //   lastHouseActualPage,
  //   totalPages,
  //   setActualPage,
  // ] = Pagination(allHouses.length, perPage);

  const filterAllHousesWithActiveFilters = (houses, filters) => {
    const filteredArrayOfHouses = [];
    houses.map((house) => {
      if (filters.includes(house.rooms)) {
        filteredArrayOfHouses.push(house);
      }
    });
    return filteredArrayOfHouses;
  };
  let allFilteredHouses = filterAllHousesWithActiveFilters(
    allHouses,
    activeFilters
  );

  return (
    <div className="houses">
      <h1>Katalog nízkoenergetických zděných domů a dřevostaveb na klíč</h1>
      <FilterAndSort
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
      <ShowPerPagePicker setPerPage={setPerPage} />
      {activeFilters.length == 0 ? (
        <BrowseWrapper allHouses={allHouses} perPage={perPage} />
      ) : (
        <BrowseWrapper allHouses={allFilteredHouses} perPage={perPage} />
      )}
      {/* <BrowseHouses allHouses={housesOnActualPage} />

      <PaginationButtons
        setActualPage={setActualPage}
        totalPages={totalPages}
      /> */}
    </div>
  );
};

export default Houses;
