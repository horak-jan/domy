const Filter = (props) => {
  const { activeFilters, setActiveFilters } = props;
  // selection of filters
  const numberOfRoomsInHouse = ["2+kk", "3+kk", "4+kk", "5+kk"];

  // toggle for setting new filter-s
  const addOrRemoveNewFilter = (numberOfRooms) => {
    if (activeFilters.includes(numberOfRooms)) {
      const indexOfFilterInArray = activeFilters.indexOf(numberOfRooms);
      let oldActiveFilters = [...activeFilters];
      oldActiveFilters.splice(indexOfFilterInArray, 1);
      setActiveFilters(oldActiveFilters);
    } else {
      const activeFiltersAfterAdding = [...activeFilters, numberOfRooms];
      setActiveFilters(activeFiltersAfterAdding);
    }
  };
  return (
    <div className="filter">
      <h3>Dispozice domu:</h3>

      {numberOfRoomsInHouse.map((numberOfRooms) => (
        <span key={numberOfRooms}>
          {numberOfRooms}
          <input
            type="checkbox"
            id={numberOfRooms}
            onClick={() => {
              addOrRemoveNewFilter(numberOfRooms);
            }}
          />
        </span>
      ))}
    </div>
  );
};

export default Filter;
