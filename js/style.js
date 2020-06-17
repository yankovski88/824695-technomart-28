var contactUsLink = document.querySelector(".contact-link");
var writeUs = document.querySelector(".write_us");
var writeUsClose = writeUs.querySelector(".write_us_close-img");

var linkMap = document.querySelector(".contact-img")
var popupMap = document.querySelector(".modal-map")
var mapClose = document.querySelector(".close-img");
linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  // console.log("klick map");
  popupMap.classList.add("map-active")
  mapClose.classList.add("close-img-active")
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  // console.log("cklick enter esx");
  popupMap.classList.remove("map-active")
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains("map-active")) {
      evt.preventDefault();
      popupMap.classList.remove("map-active");
    }
  }
});


var firstName = writeUs.querySelector("[name=firstname-lastname]");
var email = writeUs.querySelector("[name=email]");
var text = writeUs.querySelector("[name=text-message]");
// var storage = localStorage.getItem("email");

var isStorageSupport = true;
var storage = "";


try {
  storage = localStorage.getItem("email")
} catch (err) {
  isStorageSupport = false;
}


contactUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
// console.log("click on link");
  writeUs.classList.add("modal-show");
  firstName.focus();
  if (storage) {
    email.value = storage;
  }
});

writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUs.classList.remove("modal-show");
  // writeUs.classList.remove("modal-error");
});

writeUs.addEventListener("click", function (evt) {
// submit not work

  if (!firstName.value || !email.value || !text.value) {
    evt.preventDefault();
    // writeUs.classList.remove("modal-error");
    // writeUs.offsetWidth = writeUs.offsetWidth;
    // writeUs.classList.add("modal-error")
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", email.value)
    }
  }
  ;
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeUs.classList.contains("modal-show")) {
      evt.preventDefault();
      writeUs.classList.remove("modal-show");
    }
  }
});


// catalog
buyButtons.forEach(function( button)  {
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("asdfasdf");
    buyPopup.classList.add("working-block");
  });
});


var buyButtons = document.querySelector(".buy");
var buyPopup = document.querySelector(".add-basket");
var buyClose = document.querySelector(".close-add-basket");


buyButtons.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("asdfasdf");
  buyPopup.classList.add("working-block");
});

buyClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("working-block")
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (buyPopup.classList.contains("working-block")) {
      evt.preventDefault();
      writeUs.classList.remove("working-block");
    }
  }
});
