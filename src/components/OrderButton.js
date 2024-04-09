const OrderButton = () => {
  const button = document.createElement("button");
  button.textContent = "Start ordering >";
  button.classList.add("btn-order");

  return button;
};

export default OrderButton;
