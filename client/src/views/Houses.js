import HousesWrapper from "../components/houses/HousesWrapper";
import Loading from "../components/utils/Loading";
import ShowErrorMessage from "../components/utils/ShowErrorMessage";
import useDbData from "../components/utils/useDbData";

const Houses = () => {
  const [loadedData, isLoading, hasError] = useDbData("basicinfo");
  const { allHouses } = loadedData;

  return (
    <div className="houses">
      <h1>Katalog nízkoenergetických domů na klíč</h1>
      {isLoading ? (
        <Loading />
      ) : hasError ? (
        <ShowErrorMessage />
      ) : (
        <HousesWrapper allHouses={allHouses} />
      )}
    </div>
  );
};

export default Houses;
