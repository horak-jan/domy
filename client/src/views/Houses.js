import { useState, useEffect } from "react";
import axios from "axios";
import HousesOnActualPage from "../components/houses/HousesOnActualPage";
import ButtonsForPagination from "../components/houses/ButtonsForPagination";
const Houses = () => {
  const [actualPage, setActualPage] = useState(1);
  // const [allHouses, setAllHouses] = useState();
  const [perPage] = useState(3);
  const allHouses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [loading, setLoading] = useState(true);
  const [isFiltered, setIsFiltered] = useState(false);
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get("api/house");
  //     setAllHouses(res.data);
  //     setLoading(false);
  //   };

  //   fetchPosts();
  // }, []);
  // useEffect(() => {

  // }, actualPage);

  const lastHouse = actualPage * perPage;
  const firstHouse = lastHouse - perPage;
  const totalPages = Math.ceil(allHouses.length / perPage);
  const housesOnActualPage = allHouses.slice(firstHouse, lastHouse);

  return (
    <div className="houses">
      <HousesOnActualPage housesOnActualPage={housesOnActualPage} />
      <ButtonsForPagination
        setActualPage={setActualPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Houses;
