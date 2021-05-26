import Filter from "./Filter/Filter";
import Sort from "./Sort/Sort";

const FilterAndSort = (props) => {
  return (
    <div className="filter-and-sort">
      <Filter
        activeFilters={props.activeFilters}
        setActiveFilters={props.setActiveFilters}
      />
      <Sort
        sortDirection={props.sortDirection}
        setSortDirection={props.setSortDirection}
      />
    </div>
  );
};

export default FilterAndSort;
