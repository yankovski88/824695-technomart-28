// index


var contactUsLink = document.querySelector(".contact-link");
var writeUs = document.querySelector(".write_us");
var writeUsClose = writeUs.querySelector(".write_us_close-img");
var buttonSend = document.querySelector(".button-send");

var linkMap = document.querySelector(".contact-img")
var popupMap = document.querySelector(".modal-map")
var mapClose = document.querySelector(".close-img");

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("map-active")
  mapClose.classList.add("close-img-active")
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
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
  writeUs.classList.add("modal-show");
  firstName.focus();
  if (storage) {
    email.value = storage;
  }
});

writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUs.classList.remove("modal-show");
});


buttonSend.addEventListener("click", function (evt) {

  if (!firstName.value || !email.value || !text.value) {
    evt.preventDefault();
    writeUs.classList.remove("modal-error");
    writeUs.offsetWidth = writeUs.offsetWidth;
    writeUs.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeUs.classList.contains("modal-show")) {
      evt.preventDefault();
      writeUs.classList.remove("modal-show");
    }
  }
});


var buttonDelivery = document.querySelector(".block-button-delivery");
var service = document.querySelector(".box-service-wrap-delivery");

var buttonGuarantee = document.querySelector(".block-button-guarantee");
var guarantee = document.querySelector(".box-service-wrap-guarantee");

var buttonCredit = document.querySelector(".block-button-credit");
var credit = document.querySelector(".box-service-credit")


buttonDelivery.addEventListener("click", function (evt) {
  evt.preventDefault();
  service.classList.add("working-block");
  guarantee.classList.remove("working-block");
  credit.classList.remove("working-block");

  buttonCredit.classList.remove("block-button-active");
  buttonDelivery.classList.add("block-button-active");
  buttonGuarantee.classList.remove("block-button-active");
});

buttonGuarantee.addEventListener("click", function (evt) {
  evt.preventDefault();
  guarantee.classList.add("working-block")
  service.classList.remove("working-block");
  credit.classList.remove("working-block");

  buttonCredit.classList.remove("block-button-active");
  buttonDelivery.classList.remove("block-button-active");
  buttonGuarantee.classList.add("block-button-active");
});

buttonCredit.addEventListener("click", function (evt) {
  evt.preventDefault();
  credit.classList.add("working-block");
  service.classList.remove("working-block");
  guarantee.classList.remove("working-block");

  buttonCredit.classList.add("block-button-active");
  buttonDelivery.classList.remove("block-button-active");
  buttonGuarantee.classList.remove("block-button-active");
});


// buy.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   console.log("abra");
//   buyPopup.classList.add("window-block");
// });
//
// buyClose.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   buyPopup.classList.remove("window-block")
// });
//
// window.addEventListener("keydown", function (evt) {
//   if (evt.keyCode === 27) {
//     if (buyPopup.classList.contains("window-block")) {
//       evt.preventDefault();
//       writeUs.classList.remove("window-block");
//     }
//   }
// });

