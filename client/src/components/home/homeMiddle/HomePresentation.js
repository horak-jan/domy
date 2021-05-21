import HomePresentationSection from "./HomePresentationSection";
import Loading from "../../utils/Loading";
import ShowErrorMessage from "../../utils/ShowErrorMessage";
import useDbData from "../../utils/useDbData";

const HomePresentation = () => {
  const [loadedData, isLoading, hasError] = useDbData("presentation");
  let { presentation } = loadedData;

  return (
    <div className="home-presentation">
      {isLoading ? (
        <Loading />
      ) : hasError ? (
        <ShowErrorMessage />
      ) : (
        presentation.map((sectionContent) => (
          <HomePresentationSection
            key={sectionContent.header}
            content={sectionContent}
          />
        ))
      )}
    </div>
  );
};

export default HomePresentation;
