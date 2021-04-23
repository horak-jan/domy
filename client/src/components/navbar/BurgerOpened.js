import React from "react";
import BurgerIconOpened from "../../images/burger-menu-opened.png";

const BurgerOpened = (props) => {
  let toggle,
    setToggle = { ...props };
  return (
    <div className={toggle ? "burger-opened" : "burger-closed"}>
      <img
        src={BurgerIconClosed}
        alt="menu icon closed"
        onClick={setToggle(!toggle)}
      />
      <p> opened</p>
    </div>
  );
};

export default BurgerOpened;
