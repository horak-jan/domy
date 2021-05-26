import { useState } from "react";
import allHouses from "../basicHouseInfo.json";
import BrowseWrapper from "../components/houses/BrowseWrapper";
import FilterAllHousesWithActiveFilters from "../components/houses/FilterAndSort/Filter/FilterAllHousesWithActiveFilters";
import FilterAndSort from "../components/houses/FilterAndSort/FilterAndSort";
import useHouseSort from "../components/houses/FilterAndSort/Sort/useHouseSort";
import ShowPerPagePicker from "../components/utils/Pagination/ShowPerPagePicker";

const Houses = () => {
  const [perPage, setPerPage] = useState(6);
  const [activeFilters, setActiveFilters] = useState([]);
  const [sortDirection, setSortDirection, allSortedHouses] = useHouseSort(
    allHouses
  );
  const allFilteredHouses = FilterAllHousesWithActiveFilters(
    allSortedHouses,
    activeFilters
  );

  return (
    <div className="houses">
      <h1>Katalog nízkoenergetických zděných domů a dřevostaveb na klíč</h1>
      <FilterAndSort
        setSortDirection={setSortDirection}
        sortDirection={sortDirection}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
      <ShowPerPagePicker perPage={perPage} setPerPage={setPerPage} />
      {/* first loading,no active filters */}
      {activeFilters.length == 0 ? (
        <BrowseWrapper allHouses={allSortedHouses} perPage={perPage} />
      ) : (
        // show filtered and sorted houses
        <BrowseWrapper allHouses={allFilteredHouses} perPage={perPage} />
      )}
    </div>
  );
};

export default Houses;
