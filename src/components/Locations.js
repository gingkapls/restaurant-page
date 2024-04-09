import map from "../assets/map2.png";

const Locations = () => {
  const div = document.createElement("div");
  div.classList.add("locations");

  const h4 = document.createElement("h4");
  h4.textContent = "About our Location";

  const p = document.createElement("p");
  p.textContent = "104 Route 70, Cherry Hill";

  const img = new Image();
  img.src = map;

  div.appendChild(h4);
  div.appendChild(p);
  div.appendChild(img);

  return div;
};

export default Locations;

/*
<div class="locations">
        <h4>About our location</h4>
        <p>104 Route 70, Cherry Hill</p>        
        <img src="<%= require('./assets/map2.png') %>" alt="" />
      </div>


*/
