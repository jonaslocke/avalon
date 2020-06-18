//SPLASH SCREEN

let hamburger = document.querySelector(".hamburger-avalon");
let splashWrapper = document.querySelector(".splash .menu");
let playButton = document.querySelector(".splash .menu .play");
let splash = document.querySelector(".splash");
let arena = document.querySelector("#arenaButton");

hamburger.addEventListener("click", () => toggleMenu());

function toggleMenu() {
  hamburger.classList.toggle("is-active");
  splashWrapper.classList.toggle("show");
}

playButton.addEventListener("click", () => {
  toggleMenu();
  setTimeout(() => {
    splash.classList.toggle("hide");
  }, 350);
  setTimeout(() => {
    arena.click();
  }, 700);
});
