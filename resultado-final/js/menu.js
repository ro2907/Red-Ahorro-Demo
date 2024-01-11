const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");
const botonMenu = document.getElementById("abrigos2");
const submenu = document.querySelector(".submenu");

openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
})

closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
})
botonMenu.addEventListener("click", function() {
    submenu.classList.toggle("visible");
  });