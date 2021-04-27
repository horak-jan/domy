import { useState } from "react";
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
        src={
          toggle
            ? "https://res.cloudinary.com/dsdaneoq8/image/upload/v1619390570/domy/burger-menu-opened_cubecv.png"
            : "https://res.cloudinary.com/dsdaneoq8/image/upload/v1619390570/domy/burger-menu-closed_xotl2s.png"
        }
      />

      <BurgerMenu toggle={toggle} />
    </div>
  );
};

export default Burger;
