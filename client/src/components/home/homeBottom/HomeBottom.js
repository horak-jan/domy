import HomeBottomLast from "./HomeBottomLast";
import HomeBottomTextParagraph from "./HomeBottomTextParagraph";
import Loading from "../../utils/Loading";
import useDbData from "../../utils/useDbData";
import ShowErrorMessage from "../../utils/ShowErrorMessage";

const HomeBottom = () => {
  const [loadedData, isLoading, hasError] = useDbData("hometext");

  let { homeText } = loadedData;

  return (
    <div className="home-bottom">
      <div className="home-bottom-stripe">
        <h2>
          Vyberte si nízkoenergetický zděný dům anebo nízkoenergetickou
          dřevostavbu na klíč a my Vám jej upravíme na míru!
        </h2>

        {hasError ? (
          <ShowErrorMessage />
        ) : isLoading ? (
          <Loading />
        ) : (
          homeText.bottom.map((text) => (
            <HomeBottomTextParagraph key={text.big} text={text} />
          ))
        )}
      </div>
      <img
        alt="house picture"
        src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1619390572/domy/new_n9di9s.png"
      />

      {isLoading ? <Loading /> : <HomeBottomLast text={homeText.last} />}
    </div>
  );
};

export default HomeBottom;
