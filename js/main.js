var elHeader = document.querySelector(".site-header");
var elMenuButton = document.querySelector(".site-header__menu");
var elModeButton = document.querySelector(".site-header__mode");

elMenuButton.addEventListener("click", () => {
  elHeader.classList.toggle("open");
  if(elHeader.classList.contains("open")) {
    elHeader.classList.add("menu-color");
    document.body.style.overflow = "hidden";
  } else {
    elHeader.classList.remove("menu-color")
    document.body.removeAttribute("style");
  }
})

var elBody = document.body;

elModeButton.addEventListener("click", () => {
  elBody.classList.toggle("dark-mode");
})