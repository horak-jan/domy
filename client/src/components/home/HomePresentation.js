import { useEffect, useState } from "react";
import Axios from "axios";
import HomePresentationSection from "./HomePresentationSection";

const HomePresentation = () => {
  const [presentationContent, setPresentationContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPresentationContent = async () => {
      try {
        const res = await Axios.get(`/api/presentation`);

        setPresentationContent(res.data.presentation);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    getPresentationContent();
  }, []);
  console.log(presentationContent);
  return (
    <div className="home-presentation">
      {isLoading ? (
        <p style={{ textAlign: "center" }}>Načítám</p>
      ) : (
        presentationContent.map((sectionContent) => (
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
