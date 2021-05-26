import { useState } from "react";

const useHouseSort = (allHouses) => {
  const [sortDirection, setSortDirection] = useState("highToLow");
  let allSortedHouses = [];
  //   default sort to display
  const sortedHousesHighToLow = [...allHouses].sort(
    (a, b) => b.oneTimePaymentPrice - a.oneTimePaymentPrice
  );
  // or low to high if chosen
  const sortedHousesLowToHigh = [...sortedHousesHighToLow].reverse();

  if (sortDirection == "highToLow") {
    allSortedHouses = [...sortedHousesHighToLow];
  } else {
    allSortedHouses = [...sortedHousesLowToHigh];
  }

  return [sortDirection, setSortDirection, allSortedHouses];
};

export default useHouseSort;
