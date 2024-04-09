import menuData from "../menuData";
import FoodItem from "./FoodItem";

const Menu = () => {
  const content = document.createElement("div");
  content.classList.add("content");
  menuData.forEach((item) => {
    content.appendChild(FoodItem(item));
  });

  return content;
};

export default Menu;
