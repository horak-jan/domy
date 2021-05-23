import { useState } from "react";

const Pagination = (amountOfAllHouses, perPage) => {
  const [actualPage, setActualPage] = useState(1);
  const lastHouseActualPage = actualPage * perPage;
  const firstHouseActualPage = lastHouseActualPage - perPage;
  const totalPages = Math.ceil(amountOfAllHouses / perPage);

  return [firstHouseActualPage, lastHouseActualPage, totalPages, setActualPage];
};

export default Pagination;
