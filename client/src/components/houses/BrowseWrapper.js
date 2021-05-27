import Pagination from "../utils/Pagination/Pagination";
import PaginationButtons from "../utils/Pagination/PaginationButtons";
import BrowseHouses from "./BrowseHouses";

const BrowseWrapper = (props) => {
  const { perPage, allHouses } = props;

  const [
    firstHouseActualPage,
    lastHouseActualPage,
    totalPages,
    actualPage,
    setActualPage,
  ] = Pagination(allHouses.length, perPage);

  const housesOnActualPage = allHouses.slice(
    firstHouseActualPage,
    lastHouseActualPage
  );

  return (
    <div className="browse-wrapper">
      <BrowseHouses allHouses={housesOnActualPage} />

      <PaginationButtons
        actualPage={actualPage}
        setActualPage={setActualPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default BrowseWrapper;
