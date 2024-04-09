import menuData from "../menuData";
import FoodItem from "./FoodItem";

const Menu = () => {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  menuData.forEach((item) => {
    menuContainer.appendChild(FoodItem(item));
  });

  return menuContainer;
};

export default Menu;
