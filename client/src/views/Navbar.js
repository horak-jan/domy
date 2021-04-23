import React from "react";
import Burger from "../components/navbar/Burger";
import Nav from "../components/navbar/Nav";

const Navbar = () => {
  return (
    <div className="navbar">
      <Burger />
      <Nav />
    </div>
  );
};

export default Navbar;
