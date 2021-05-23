import { useState } from "react";
import allHouses from "../basicHouseInfo.json";
import BrowseHouses from "../components/houses/BrowseHouses";
import FilterAndSort from "../components/houses/FilterAndSort/FilterAndSort";
import Pagination from "../components/utils/Pagination/Pagination";
import PaginationButtons from "../components/utils/Pagination/PaginationButtons";
import ShowPerPage from "../components/utils/Pagination/ShowPerPage";

const Houses = () => {
  const [perPage, setPerPage] = useState(6);

  const [
    firstHouseActualPage,
    lastHouseActualPage,
    totalPages,
    setActualPage,
  ] = Pagination(allHouses.length, perPage);
  const housesOnActualPage = allHouses.slice(
    firstHouseActualPage,
    lastHouseActualPage
  );

  return (
    <div className="houses">
      <h1>Katalog nízkoenergetických zděných domů a dřevostaveb na klíč</h1>

      <FilterAndSort />

      <ShowPerPage setPerPage={setPerPage} />

      <BrowseHouses allHouses={housesOnActualPage} />

      <PaginationButtons
        setActualPage={setActualPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Houses;
