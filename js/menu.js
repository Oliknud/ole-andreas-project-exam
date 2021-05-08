const menuLinks = document.querySelector(".menu-links");
const links = document.querySelector(".links");
const x = document.querySelector("#burger");
const footer = document.querySelector("footer");
const main = document.querySelector("main");
const cross = document.querySelector(".cross");

x.addEventListener("click", burgermenu);
cross.addEventListener("click", burgermenu);




function burgermenu() {
    if (menuLinks.style.display === "none") {
        menuLinks.style.display = "flex";
        menuLinks.style.top = "0";
        footer.style.display = "none";
        main.style.display = "none";
    } else {
        menuLinks.style.display = "none";
        menuLinks.style.top = "-100%";
        footer.style.display = "flex"
        main.style.display = "flex";
    }
}

console.log(x)