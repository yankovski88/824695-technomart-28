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

buttonGuarantee.addEventListener("click", function (evt){
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





// catalog


var buyButtons = document.querySelector(".buy");
var buyPopup = document.querySelector(".add-basket");
var buyClose = document.querySelector(".close-add-basket");


// buyButtons.forEach(function( button)  {
//   button.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     console.log("asdfasdf");
//     buyPopup.classList.add("working-block");
//   });
// });


// buyButtons.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   console.log("asdfasdf");
//   buyPopup.classList.add("working-block");
// });

// buyClose.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   buyPopup.classList.remove("working-block")
// });
//
// window.addEventListener("keydown", function (evt) {
//   if (evt.keyCode === 27) {
//     if (buyPopup.classList.contains("working-block")) {
//       evt.preventDefault();
//       writeUs.classList.remove("working-block");
//     }
//   }
// });
