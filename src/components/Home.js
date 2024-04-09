const Home = () => {
  const hero = document.createElement("div");
  hero.classList.add("hero-image");

  const heroText = document.createElement("div");
  heroText.classList.add("hero-text");

  const h3 = document.createElement("h3");
  h3.textContent = "New Products";

  const para = document.createElement("p");
  para.textContent = "Welcome to taste in the store!";

  heroText.replaceChildren(h3, para);
  hero.appendChild(heroText);

  return hero;
};

export default Home;
