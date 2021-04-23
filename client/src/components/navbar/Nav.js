import React from "react";
import MenuLinks from "./MenuLinks";

const Nav = () => {
  return (
    <div className="nav">
      <h1>
        <a href="/">
          DOMY<span>.CZ</span>
        </a>
      </h1>
      <MenuLinks />
    </div>
  );
};

export default Nav;
