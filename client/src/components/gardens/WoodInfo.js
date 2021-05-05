import useDbData from "../utils/useDbData";
import SingleImage from "./SingleImage";

const WoodInfo = () => {
  const [loadedData, isLoading, isError] = useDbData("image");

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
        <p style={{ textAlign: "center", marginTop: "5vh" }}>
          Někde se stala chyba
        </p>
      ) : isLoading ? (
        <p style={{ textAlign: "center", marginTop: "5vh" }}>Načítám</p>
      ) : (
        <div className="gallery">
          {loadedData.image[0].imagesWood.map((image) => (
            <SingleImage src={image} key={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WoodInfo;
