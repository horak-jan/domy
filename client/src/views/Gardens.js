import GardenImages from "../components/gardens/GardenImages";
import GardenSlide from "../components/gardens/gardenSlide/GardenSlide";
import ErrorMessage from "../components/utils/ErrorMessage";
import Loading from "../components/utils/Loading";
import useDbData from "../components/utils/useDbData";

const Gardens = () => {
  const [loadedData, isLoading, hasError] = useDbData("garden");
  let { garden } = loadedData;

  return (
    <div className="gardens">
      <h1>Splníme vám sen o krásné zahradě</h1>

      <p>
        Přestaňte o své zahradě jen snít! Vaše představy díky nám dostanou tvar.
      </p>
      {hasError ? (
        <ErrorMessage />
      ) : isLoading ? (
        <Loading />
      ) : (
        garden.gardenSlide.map((slide) => (
          <GardenSlide key={slide.header} content={slide} />
        ))
      )}
      <h2>Naše práce, vaše radost</h2>

      {isLoading ? <Loading /> : <GardenImages images={garden.images} />}
    </div>
  );
};

export default Gardens;
