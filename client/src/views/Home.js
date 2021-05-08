import React from "react";
import HomeBottom from "../components/home/homeBottom/HomeBottom";
import HomeMiddle from "../components/home/homeMiddle/HomeMiddle";
import HomeTop from "../components/home/HomeTop";

const Home = () => {
  return (
    <div className="home">
      <HomeTop />
      <HomeMiddle />
      <HomeBottom />
    </div>
  );
};

export default Home;
