import Filter from "./Filter";
import Sort from "./Sort";

const FilterAndSort = (props) => {
  return (
    <div className="filter-and-sort">
      <Filter
        activeFilters={props.activeFilters}
        setActiveFilters={props.setActiveFilters}
      />
      <Sort />
    </div>
  );
};

export default FilterAndSort;
