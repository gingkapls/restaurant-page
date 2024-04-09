const FoodItem = ({ title, imgSrc, imgAlt = "japanese food", description }) => {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("food-item");
  const img = new Image();
  img.src = imgSrc;
  img.alt = imgAlt;
  mainDiv.appendChild(img);

  const descDiv = document.createElement("div");
  descDiv.classList.add("food-item-desc");

  const h4 = document.createElement("h4");
  h4.textContent = title;

  const desc = document.createElement("quote");
  desc.textContent = description;

  descDiv.appendChild(h4);
  descDiv.appendChild(desc);

  mainDiv.appendChild(descDiv);
  return mainDiv;
};

export default FoodItem;
