import ShowErrorMessage from "../utils/ShowErrorMessage";
import Loading from "../utils/Loading";
import useDbData from "../utils/useDbData";
import SingleImage from "./singleImage/SingleImage";

const GardenInfo = () => {
  const [loadedData, isLoading, isError] = useDbData("image");
  let { image } = loadedData;
  return (
    <div className="garden-info">
      <h1>Zahrady</h1>
      <p>
        Osobní konzultaci, osazovací plán a projekt zahrady, zajištění terénních
        úprav, zavlažovací systém, dodání rostlinného materiálu, dovoz a výsadbu
        rostlin, úpravu záhonů mulčovací kůrou nebo drobnými oblázky, pokládku
        travního koberce nebo výsev trávníku.
      </p>
      <h3>NOVĚ NABÍZÍME TAKÉ</h3>
      <p>
        Kompletní rekonstrukci starých zahrad, realizace zavlažovacích systémů,
        pokládku zámkové dlažby, stavby zídek a plotů.
      </p>
      {isError ? (
        <ShowErrorMessage />
      ) : isLoading ? (
        <Loading />
      ) : (
        <div className="gallery">
          {image.imagesGarden.map((image) => (
            <SingleImage src={image} key={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GardenInfo;
