import "./main.css";
import FoodItem from "./components/FoodItem";
import OrderButton from "./components/OrderButton";
import menu from "./menu";

const content = document.querySelector(".content");

const renderMenu = () => {
  menu.forEach((item) => {
    content.appendChild(FoodItem(item));
  });
};

renderMenu();
