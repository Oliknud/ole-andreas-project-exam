const menuLinks = document.querySelector(".menu-links");
const x = document.querySelector("#burger");
const cross = document.querySelector(".cross");
const body = document.querySelector("body");

x.addEventListener("click", burgermenu);
cross.addEventListener("click", burgermenu);

function burgermenu() {
    menuLinks.classList.toggle("menu-links-active");
    if (body.style.overflow === "hidden") {
        body.style.overflow = "visible";
    } else {
        body.style.overflow = "hidden";
    }
}