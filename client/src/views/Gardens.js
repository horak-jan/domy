import GardenImages from "../components/gardens/GardenImages";
import GardenSlide from "../components/gardens/GardenSlide";
import { useEffect, useState } from "react";
import Axios from "axios";

const Gardens = () => {
  const [gardensContent, setGardensContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getGardensContent = async () => {
      try {
        const res = await Axios.get(`/api/garden`);

        setGardensContent(...res.data.garden);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    getGardensContent();
  }, []);
  return (
    <div className="gardens">
      <h1>Splníme vám sen o krásné zahradě</h1>

      <p>
        Přestaňte o své zahradě jen snít! Vaše představy díky nám dostanou tvar.
      </p>
      {isLoading ? (
        <p style={{ textAlign: "center" }}>Načítám</p>
      ) : (
        gardensContent.gardenSlide.map((slide) => (
          <GardenSlide key={slide.header} content={slide} />
        ))
      )}
      <h2>Naše práce, vaše radost</h2>

      <GardenImages isLoading={isLoading} images={gardensContent.images} />
    </div>
  );
};

export default Gardens;
