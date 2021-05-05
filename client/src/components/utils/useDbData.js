import { useEffect, useState } from "react";
import Axios from "axios";

const useDbData = (dataToLoad) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [loadedData, setLoadedData] = useState({});

  useEffect(() => {
    const getDataToLoad = async () => {
      try {
        const res = await Axios.get(`/api/${dataToLoad}`);

        setLoadedData(res.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    getDataToLoad();
  }, []);

  return [loadedData, isLoading, isError];
};

export default useDbData;
