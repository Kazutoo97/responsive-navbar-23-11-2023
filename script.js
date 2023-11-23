const menu = document.querySelector(".menu");
const openMenu = document.querySelector(".menu-open");

openMenu.addEventListener("click", () => {
  openMenu.classList.toggle("bx-x");
  menu.classList.toggle("active");
});
