import React from "react";
import HomeBottom from "../components/home/HomeBottom";
import HomeMiddle from "../components/home/HomeMiddle";
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
