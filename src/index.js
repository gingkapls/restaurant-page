import "./main.css";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Locations from "./components/Locations";

const content = document.querySelector(".content");
const navBar = document.querySelector("nav");

const renderComponent = (component) => (container) => {
  container.replaceChildren(component());
};

const renderHome = renderComponent(Home);
const renderMenu = renderComponent(Menu);
const renderLocations = renderComponent(Locations);

navBar.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) return;

  console.log(event.target.textContent);
  switch (event.target.textContent.toLowerCase()) {
    case "menu":
      renderMenu(content);
      break;

    case "home":
      renderHome(content);
      break;

    case "locations":
      renderLocations(content);
      break;
  }
});

// renderHome(content);
