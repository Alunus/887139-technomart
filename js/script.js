var link = document.querySelector(".letter-link");

var popup = document.querySelector(".write-us");

var close = popup.querySelector(".close-btn");

var login = popup.querySelector("[name=user_name]");

var formPrventDefault = document.querySelector(".letter");

var UsernNameRequiredCheckPopUp = popup.querySelector("[name=user_name]");

var UserEmailRequiredCheckPopUp = popup.querySelector("[name=user_email]");

var LetterRequiredCheckPopUp = popup.querySelector("[name=letter]");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("letter-show");
  user_name.focus();
});
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("letter-show");
  popup.classList.remove("modal-error");
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("letter-show")) {
      popup.classList.remove("letter-show");
      popup.classList.remove("modal-error");
    }
  }
});
popup.addEventListener("submit", function(evt) {
  evt.preventDefault();
});

popup.addEventListener("submit", function(evt) {
  if (
    !UsernNameRequiredCheckPopUp.value ||
    !UserEmailRequiredCheckPopUp.value ||
    !LetterRequiredCheckPopUp.value
  ) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
  evt.preventDefault();
});

var mapLink = document.querySelector(".map-link");

var mapPopup = document.querySelector(".interactive-map");

var mapClose = mapPopup.querySelector(".close-btn");

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("map-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("map-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("map-show")) {
      mapPopup.classList.remove("map-show");
      popup.classList.remove("modal-error");
    }
  }
});

var delivery = document.querySelector(".delivery");

var garanty = document.querySelector(".garanty");

var credit = document.querySelector(".credit");

var delivery_des = document.querySelector(".delivery-des");

var garanty_des = document.querySelector(".garanty-des");

var credit_des = document.querySelector(".credit-des");

delivery.addEventListener("click", function(evt) {
  evt.preventDefault();
  delivery.classList.add("white");
  garanty.classList.remove("white");
  credit.classList.remove("white");
  delivery.classList.remove("hov");
  garanty.classList.add("hov");
  credit.classList.add("hov");
  delivery_des.classList.remove("hidden");
  garanty_des.classList.add("hidden");
  credit_des.classList.add("hidden");
});

garanty.addEventListener("click", function(evt) {
  evt.preventDefault();
  delivery.classList.remove("white");
  garanty.classList.add("white");
  credit.classList.remove("white");
  delivery.classList.add("hov");
  garanty.classList.remove("hov");
  credit.classList.add("hov");
  delivery_des.classList.add("hidden");
  garanty_des.classList.remove("hidden");
  credit_des.classList.add("hidden");
});

credit.addEventListener("click", function(evt) {
  evt.preventDefault();
  delivery.classList.remove("white");
  garanty.classList.remove("white");
  credit.classList.add("white");
  delivery.classList.add("hov");
  garanty.classList.add("hov");
  credit.classList.remove("hov");
  delivery_des.classList.add("hidden");
  garanty_des.classList.add("hidden");
  credit_des.classList.remove("hidden");
});

var login = document.querySelector(".login");

var user_login = document.querySelector(".log-reg");

var logout = document.querySelector(".logout");

var user_logout = document.querySelector(".user-office");

login.addEventListener("click", function(evt) {
  evt.preventDefault();
  user_login.classList.add("hidden");
  user_logout.classList.remove("hidden");
});
logout.addEventListener("click", function(evt) {
  evt.preventDefault();
  user_login.classList.remove("hidden");
  user_logout.classList.add("hidden");
});

var sliderButtons = Array.prototype.slice.call(
  document.querySelectorAll(".slider-button")
);
var prevSlide = document.getElementById("prevSlide");
var nextSlide = document.getElementById("nextSlide");
var slider = document.querySelector(".slider");

if (slider) {
  var slides = slider.querySelectorAll(".slide");
  var currentSlide;
  sliderButtons.forEach(function(button, i) {
    button.addEventListener("click", function() {
      for (var y = 0; y < slides.length; y++) {
        slides[y].classList.remove("slide-current");
        sliderButtons[y].classList.remove("slider-button--active");
      }
      this.classList.add("slider-button--active");
      slides[i].classList.add("slide-current");
      slider.setAttribute("data-currentSlide", i);
    });
  });
  prevSlide.addEventListener("click", function() {
    currentSlide = slider.getAttribute("data-currentslide");
    if (currentSlide > 0) {
      for (var y = 0; y < slides.length; y++) {
        slides[y].classList.remove("slide-current");
        sliderButtons[y].classList.remove("slider-button--active");
      }
      console.log(currentSlide);
      currentSlide--;
      console.log(currentSlide);
      sliderButtons[currentSlide].classList.add("slider-button--active");
      slides[currentSlide].classList.add("slide-current");
      slider.setAttribute("data-currentSlide", currentSlide);
    }
  });
  nextSlide.addEventListener("click", function() {
    currentSlide = slider.getAttribute("data-currentslide");
    if (currentSlide < slides.length - 1) {
      for (var y = 0; y < slides.length; y++) {
        slides[y].classList.remove("slide-current");
        sliderButtons[y].classList.remove("slider-button--active");
      }
      console.log(currentSlide);
      currentSlide++;
      console.log(currentSlide);
      sliderButtons[currentSlide].classList.add("slider-button--active");
      slides[currentSlide].classList.add("slide-current");
      slider.setAttribute("data-currentSlide", currentSlide);
    }
  });
}
var bookmark = document.querySelector(".bookmark");
var add_bookmark = document.querySelector(".add-to-bookmark");
var cart = document.querySelector(".cart");
var add_cart = document.querySelector(".add-to-cart");

add_bookmark.addEventListener("click", function(evt) {
  evt.preventDefault();
  bookmark.classList.add("red");
});

add_cart.addEventListener("click", function(evt) {
  evt.preventDefault();
  cart.classList.add("red");
});
