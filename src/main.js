"use strict";

const bodyEl = document.querySelector("body");

const navEl = document.querySelector(".nav");
const aboutEl = document.querySelector(".about");
const skillEl = document.querySelector(".skill");
const projectEl = document.querySelector(".project");

const darkModeBtn = document.querySelector(".dark-mode-btn");
const darkModeIcon = document.querySelector(".fa-toggle-off");
const goBtn = document.querySelector(".go__btn");
const backBtn = document.querySelector(".back__btn");

const toTop = document.getElementById("to-top");

function darkMode(event) {
  const target = event.target;

  if (target.matches(".fa-toggle-off")) {
    bodyEl.classList.add("dark-mode");
    target.classList.add("fa-toggle-on");
    target.classList.remove("fa-toggle-off");
  } else if (target.matches(".fa-toggle-on")) {
    bodyEl.classList.remove("dark-mode");
    target.classList.add("fa-toggle-off");
    target.classList.remove("fa-toggle-on");
  }
}

function showNav() {
  navEl.style.visibility = "visible";
}

function hideNav() {
  navEl.style.visibility = "hidden";
}

function showPage(event) {
  const navTarget = event.target;
  if (navTarget.matches(".about__btn")) {
    aboutEl.style.display = "block";
    toTop.style.visibility = "visible";
    aboutEl.scrollIntoView({
      behavior: "smooth",
    });
  } else if (navTarget.matches(".skill__btn")) {
    skillEl.style.display = "block";
    toTop.style.visibility = "visible";
    skillEl.scrollIntoView({
      behavior: "smooth",
    });
  } else if (navTarget.matches(".project__btn")) {
    projectEl.style.display = "block";
    toTop.style.visibility = "visible";
    projectEl.scrollIntoView({
      behavior: "smooth",
    });
  }
}

function goToTop(event) {
  if (event.target.matches(".fa-chevron-left")) {
    navEl.scrollIntoView({
      behavior: "smooth",
    });
  }
  toTop.style.visibility = "hidden";
  hidePage();
}

function hidePage() {
  if (aboutEl.style.display === "block") {
    aboutEl.style.display = "none";
  } else if (skillEl.style.display === "block") {
    skillEl.style.display = "none";
  } else if (projectEl.style.display === "block") {
    projectEl.style.display = "none";
  }
}

toTop.addEventListener("click", goToTop);

navEl.addEventListener("click", showPage);

darkModeBtn.addEventListener("click", darkMode);
goBtn.addEventListener("click", showNav);
backBtn.addEventListener("click", hideNav);

const swiper = new Swiper(".skill .swiper-container", {
  spaceBetween: 30,
  initialSlide: 0,
  slidesPerView: 3,
});
