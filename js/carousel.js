const container = document.querySelector(".container");
const slide = document.querySelector(".carousel");
const img = document.querySelectorAll(".carousel img");
const back = document.querySelector(".back");
const next = document.querySelector(".next");

let c = 1;
const imgSize = 300;
console.log(imgSize)

slide.style.transform = "translateX(" + (-imgSize * c) + "px)";

next.addEventListener("click", function(){
    if (c >= img.length -1) return;
    slide.style.transition = "transform 0.5s ease-in-out";
    c++;
    slide.style.transform = "translateX(" + (-imgSize * c) + "px)";
});

back.addEventListener("click", function(){
    if (c <= 0) return;
    slide.style.transition = "transform 0.5s ease-in-out";
    c--;
    slide.style.transform = "translateX(" + (-imgSize * c) + "px)";
});

slide.addEventListener("transitionend", function() {
    if (img[c].id === "last") {
        slide.style.transition = "none";
        c = img.length -2;
        slide.style.transform = "translateX(" + (-imgSize * c) + "px)";
    } 

    if (img[c].id === "first") {
        slide.style.transition = "none";
        c = img.length - c;
        slide.style.transform = "translateX(" + (-imgSize * c) + "px)";
    } 
});
