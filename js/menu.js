const links = document.querySelector(".menu-links");
const x = document.querySelector("#burger");
const footer = document.querySelector("footer");
const main = document.querySelector("main");

x.addEventListener("click", burgermenu);

function burgermenu() {
    if (links.style.display === "none") {
        links.style.display = "flex";
        footer.style.display = "none";
        main.style.display = "none";
    } else {
        links.style.display = "none";
        footer.style.display = "flex"
        main.style.display = "flex";
    }
}