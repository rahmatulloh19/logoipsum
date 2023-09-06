const elHeader = document.querySelector(".site-header");
const elMenuButton = document.querySelector(".site-header__menu");
const elModeButton = document.querySelector(".site-header__mode");
const elBody = document.body;

const statusMode = JSON.parse(localStorage.getItem("mode") || "false")
localStorage.setItem("mode", JSON.stringify(statusMode));

if(statusMode) {
  elBody.classList.add("dark-mode")
}

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


elModeButton.addEventListener("click", () => {
  elBody.classList.toggle("dark-mode");
  if(elBody.classList.contains("dark-mode")) {
    localStorage.setItem("mode", JSON.stringify(true))
  } else {
    localStorage.setItem("mode", JSON.stringify(false))
  }
})