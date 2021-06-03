import { useState } from "react";
import ShowPerPagePicker from "../utils/Pagination/ShowPerPagePicker";
import BrowseWrapper from "./BrowseWrapper";
import FilterAllHousesWithActiveFilters from "./FilterAndSort/Filter/FilterAllHousesWithActiveFilters";
import FilterAndSort from "./FilterAndSort/FilterAndSort";
import useHouseSort from "./FilterAndSort/Sort/useHouseSort";

const HousesWrapper = (props) => {
  const { allHouses } = props;
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
    <>
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
    </>
  );
};

export default HousesWrapper;
