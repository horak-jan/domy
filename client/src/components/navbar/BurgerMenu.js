import MenuLinks from "./MenuLinks";

const BurgerMenu = (props) => {
  return (
    <div className={props.toggle ? "burger-menu-opened" : "burger-menu-closed"}>
      <MenuLinks />
    </div>
  );
};

export default BurgerMenu;
