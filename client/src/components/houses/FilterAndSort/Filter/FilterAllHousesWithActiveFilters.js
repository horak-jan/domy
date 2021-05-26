const FilterAllHousesWithActiveFilters = (houses, filters) => {
  const filteredArrayOfHouses = [];
  houses.map((house) => {
    if (filters.includes(house.rooms)) {
      filteredArrayOfHouses.push(house);
    }
  });
  return filteredArrayOfHouses;
};
export default FilterAllHousesWithActiveFilters;
