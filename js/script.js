let burger = document.querySelector(".burger");
let menuTop = document.querySelector(".top__nav");
let menuBottom = document.querySelector(".bottom__nav");
let menuLinksTop = menuTop.querySelectorAll(".top__nav .nav__link");
let menuLinksBottom = menuBottom.querySelectorAll(".bottom__nav .nav__link");
let search = document.querySelector(".top__search .search__btn");
let searchForm = document.querySelector(".top__search .search__form");
let searchBtn = document.querySelectorAll(".search__form .form__btn");
let loginOpen = document.querySelector(".top__login .login__open");
let loginForm = document.querySelector(".top__login .login__container");
let loginClose = document.querySelectorAll(".login__container .login__close");
let podcastBtn = document.querySelectorAll(".podcast__btn");
let podcastMobile = document.querySelectorAll(".list__mobile");
let podcastDesktop = document.querySelectorAll(".list__desktop");
let personBtn = document.querySelectorAll(".person-btn");
let guestsInfo = document.querySelectorAll(".guests__info");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  menuTop.classList.toggle("nav__list--active");
  menuBottom.classList.toggle("nav__list--active");
  document.body.classList.toggle("stop-scroll");
});

menuLinksTop.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    menuTop.classList.remove("nav__list--active");
    menuBottom.classList.remove("nav__list--active");
    document.body.classList.remove("stop-scroll");
  });
});

menuLinksBottom.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    menuTop.classList.remove("nav__list--active");
    menuBottom.classList.remove("nav__list--active");
    document.body.classList.remove("stop-scroll");
  });
});

search.addEventListener("click", function () {
  searchForm.classList.toggle("search__form--active");
});

searchBtn.forEach(function (el) {
  el.addEventListener("click", function () {
    searchForm.classList.remove("search__form--active");
  });
});

loginOpen.addEventListener("click", function () {
  loginForm.classList.toggle("login__form--active");
  document.body.classList.toggle("stop-scroll");
});

loginClose.forEach(function (el) {
  el.addEventListener("click", function () {
    loginForm.classList.remove("login__form--active");
    document.body.classList.remove("stop-scroll");
  });
});

podcastBtn.forEach(function (element) {
  element.addEventListener("click", function () {
    podcastMobile.forEach(function (element) {
      element.classList.toggle("list__mobile--active");
    });
    podcastDesktop.forEach(function (element) {
      element.classList.toggle("list__desktop--active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate(".login__form");

  validation
    .addField(".form__login", [
      {
        rule: "minLength",
        value: 1,
        errorMessage: "Вы не ввели логин",
      },
    ])

    .addField(".form__password", [
      {
        rule: "minLength",
        value: 1,
        errorMessage: "Вы не ввели пароль",
      },
    ]);
});

const element = document.querySelector(".top__select");
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
  position: "bottom",
});

new Accordion(".accordion-container", {
  ariaEnabled: true,
  duration: 400,
});

personBtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    personBtn.forEach(function (btn) {
      btn.classList.remove("person-btn--active");
    });
    e.currentTarget.classList.add("person-btn--active");

    guestsInfo.forEach(function (element) {
      element.classList.remove("guests__info--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("guests__info--active");
  });
});

const swiper = new Swiper(".playlists__swiper", {
  enabled: true,
  direction: "horizontal",
  spaceBetween: 0,
  slidesPerView: "auto",
  breakpoints: {
    767: {
      enabled: false,
    },
  },
});

const swiperAbout = new Swiper(".about__swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2.1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3.97,
    },
    767: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate(".about__form");
  validation
    .addField(".form__name", [
      {
        rule: "minLength",
        value: 1,
        errorMessage: "Ошибка",
      },
    ])

    .addField(".form__email", [
      {
        rule: "minLength",
        value: 1,
        errorMessage: "Ошибка",
      },
    ]);
});
