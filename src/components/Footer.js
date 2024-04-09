const Footer = () => {
  const listItems = [
    "1215 Meadow Lane",
    "Manhattan NO 2514",
    "01-202-555-1234",
    "japanese@restaurant.com",
  ];

  const footer = document.createElement("footer");
  footer.id = "about-us";

  const div = document.createElement("div");
  div.classList.add("contact-us");

  const h5 = document.createElement("h5");
  h5.textContent = "Contact Us";

  const ul = document.createElement("ul");

  listItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.append(li);
  });

  div.appendChild(h5);
  div.appendChild(ul);

  footer.appendChild(div);

  return footer;
};

export default Footer;

/* 
<footer id="about-us">
      <div class="contact-us">
        <h5>Contact Us</h5>
        <ul>
          <li>1215 Meadow Lane</li>
          <li>Manhattan NO 2514</li>
          <li>01-202-555-1234</li>
          <li>japanese@restaurant.com</li>
        </ul>
      </div>
    </footer>


*/
