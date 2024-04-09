import "./main.css";
import FoodItem from "./components/FoodItem";
import OrderButton from "./components/OrderButton";
import menu from "./menu";

const content = document.querySelector(".content");
const mainContainer = document.querySelector(".main-container");
const navBar = document.querySelector("nav");

const renderMenu = (container) => {
  const fragment = new DocumentFragment();
  container.replaceChildren();
  menu.forEach((item) => {
    fragment.appendChild(FoodItem(item));
  });

  container.appendChild(fragment);
};

navBar.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) return;

  console.log(event.target.textContent);
  switch (event.target.textContent.toLowerCase()) {
    case "menu":
      renderMenu(content);
      break;
  }
});
