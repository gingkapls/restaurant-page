import "./main.css";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Locations from "./components/Locations";
import Footer from "./components/Footer";

const content = document.querySelector(".content");
const navBar = document.querySelector("nav");

const renderComponent = (component) => (container) => {
  window.scrollTo(0, 0);
  container.replaceChildren(component());
};

const renderHome = renderComponent(Home);
const renderMenu = renderComponent(Menu);
const renderLocations = renderComponent(Locations);

navBar.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) return;

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

renderHome(content);
document.body.appendChild(Footer());
