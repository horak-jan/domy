import useDbData from "../utils/useDbData";
import SingleImage from "./SingleImage";

const GardenInfo = () => {
  const [loadedData, isLoading, isError] = useDbData("image");

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
        <p style={{ textAlign: "center", marginTop: "5vh" }}>
          Někde se stala chyba
        </p>
      ) : isLoading ? (
        <p style={{ textAlign: "center", marginTop: "5vh" }}>Načítám</p>
      ) : (
        <div className="gallery">
          {loadedData.image[0].imagesGarden.map((image) => (
            <SingleImage src={image} key={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GardenInfo;
