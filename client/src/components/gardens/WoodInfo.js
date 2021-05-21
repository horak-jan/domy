import Loading from "../utils/Loading";
import ShowErrorMessage from "../utils/ShowErrorMessage";
import useDbData from "../utils/useDbData";
import SingleImage from "./singleImage/SingleImage";

const WoodInfo = () => {
  const [loadedData, isLoading, isError] = useDbData("image");
  let { image } = loadedData;
  return (
    <div className="wood-info">
      <h1>Dřevěné prvky</h1>
      <p>
        Dřevo do zahrady prostě patří. Objevuje se stále více a díky své
        různorodosti se hodí do všech typů zahrad.
      </p>
      <p>
        Děláme dřevěné terasy, zahradní domky, pergoly, dřevěné prvky v zahradě
        jako nášlapy, lavice, hrací prvky pro děti či dřevěné záhony.
      </p>

      {isError ? (
        <ShowErrorMessage />
      ) : isLoading ? (
        <Loading />
      ) : (
        <div className="gallery">
          {image.imagesWood.map((image) => (
            <SingleImage src={image} key={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WoodInfo;
