import PoolBottom from "../components/pool/PoolBottom";
import PoolMiddle from "../components/pool/PoolMiddle";
import PoolTop from "../components/pool/PoolTop";
import useDbData from "../components/utils/useDbData";
import Loading from "../components/utils/Loading";
import ShowErrorMessage from "../components/utils/ShowErrorMessage";

const Pools = () => {
  const [loadedData, isLoading, hasError] = useDbData("pool");
  let { PoolPageData } = loadedData;
  return (
    <div className="pool">
      <PoolTop />

      {isLoading ? (
        <Loading />
      ) : hasError ? (
        <ShowErrorMessage />
      ) : (
        <>
          <PoolMiddle poolMiddle={PoolPageData.poolMiddle} />
          <PoolBottom poolBottom={PoolPageData.poolBottom} />
        </>
      )}
    </div>
  );
};

export default Pools;
