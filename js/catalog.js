// catalog

var buy = document.querySelectorAll(".buy");
var buyPopup = document.querySelector(".add-basket");
var buyClose = document.querySelector(".close-add-basket");


buy.forEach(function (button) {
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.add("window-block");
  });
});


buyClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("window-block")
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (buyPopup.classList.contains("window-block")) {
      buyPopup.classList.remove("window-block");
    }
  }
});
