const menuLinks = document.querySelector(".menu-links");
const x = document.querySelector("#burger");
const cross = document.querySelector(".cross");
const body = document.querySelector("body");

// Adding click events to menu icon and X icon
x.addEventListener("click", burgermenu);
cross.addEventListener("click", burgermenu);

function burgermenu() {
    // When toggled; slides in menu from left
    menuLinks.classList.toggle("menu-links-active");

    // If statement to hide overflow when menu is active.
    if (body.style.overflow === "hidden") {
        body.style.overflow = "visible";
    } else {
        body.style.overflow = "hidden";
    }
}