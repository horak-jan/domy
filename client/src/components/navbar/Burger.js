import { useState } from "react";
import BurgerIconClosed from "../../images/burger-menu-closed.png";
import BurgerIconOpened from "../../images/burger-menu-opened.png";
import BurgerMenu from "./BurgerMenu";
const Burger = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="burger">
      <h1>
        <a href="/">
          DOMY<span>.CZ</span>
        </a>
      </h1>
      <img
        className="burger-button"
        onClick={() => setToggle(!toggle)}
        alt="menu button"
        src={toggle ? BurgerIconOpened : BurgerIconClosed}
      />

      <BurgerMenu toggle={toggle} />
    </div>
  );
};

export default Burger;
