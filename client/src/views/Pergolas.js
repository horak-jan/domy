import PergolaType from "../components/pergolas/PergolaType";
import Loading from "../components/utils/Loading";
import ShowErrorMessage from "../components/utils/ShowErrorMessage";
import useDbData from "../components/utils/useDbData";
const Pergolas = () => {
  const [loadedData, isLoading, hasError] = useDbData("pergola");
  const { pergola } = loadedData;

  return (
    <div className="pergolas">
      {hasError ? (
        <ShowErrorMessage />
      ) : isLoading ? (
        <Loading />
      ) : (
        pergola.map((singlePergola) => (
          <PergolaType key={singlePergola.header} pergolaType={singlePergola} />
        ))
      )}
    </div>
  );
};

export default Pergolas;
