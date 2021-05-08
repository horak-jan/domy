import { useEffect, useState } from "react";
import HomePresentationSection from "./HomePresentationSection";
import Loading from "../../utils/Loading";
import ErrorMessage from "../../utils/ErrorMessage";
import useDbData from "../../utils/useDbData";

const HomePresentation = () => {
  const [loadedData, isLoading, hasError] = useDbData("presentation");
  let { presentation } = loadedData;

  console.log(presentation);
  return (
    <div className="home-presentation">
      {isLoading ? (
        <Loading />
      ) : hasError ? (
        <ErrorMessage />
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
