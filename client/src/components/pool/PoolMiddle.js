import PoolTypeInfo from "./PoolTypeInfo";
import useDbData from "../utils/useDbData";
import Loading from "../utils/Loading";
import ErrorMessage from "../utils/ErrorMessage";
import Header from "../utils/Header";
import Image from "../utils/Image";

const PoolMiddle = () => {
  const [loadedData, isLoading, hasError] = useDbData("pool");
  let { pool } = loadedData;
  console.log(garden);

  let src =
    "https://res.cloudinary.com/dsdaneoq8/image/upload/v1620348709/domy/pool1_gokdpw.jpg";
  let header = "PLASTOVÉ BAZÉNY";
  let infoImage =
    "https://res.cloudinary.com/dsdaneoq8/image/upload/v1620348795/domy/pool2_uzw0wl.jpg";
  let text =
    "Bazény vhodné pro nadzemní i podzemní instalaci. Jsou cenově nejdostupnější, mají omezenou velikost a rychleji morálně zastarávají.";
  return (
    <div className="pool-middle">
      <p>TYPY BAZÉNŮ V NAŠÍ NABÍDCE</p>

      {isLoading ? (
        <Loading />
      ) : hasError ? (
        <ErrorMessage />
      ) : (
        <div className="pool-type">
          <Image src={src} />
          <Header header={header} />
          <PoolTypeInfo src={infoImage} text={text} />
        </div>
      )}
    </div>
  );
};

export default PoolMiddle;
