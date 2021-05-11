const container = document.querySelector(".container");
const slide = document.querySelector(".carousel");
const img = document.querySelectorAll(".carousel img");
const back = document.querySelector(".back");
const next = document.querySelector(".next");

// counter & container size
let c = 0;
const imgSize = container.clientWidth;
console.log(slide)

slide.style.transform = "translateX(0px)";

// Next button


next.addEventListener("click", function() {
    if (c >= 7) {
        c = 0;
        slide.style.transform = "translateX(0px)";
        c--;
    }
        slide.style.transition = "transform 0.5s ease-in-out";
        c++;
        slide.style.transform = "translateX(" + (-imgSize * c) + "px)";
});

// Prev button
back.addEventListener("click", function() {
    if (c <= 0) {
        c = 7;
        c++;
    }
    slide.style.transition = "transform 0.5s ease-in-out";
    c--;
    slide.style.transform = "translateX(" + (-imgSize * c) + "px)";
    
});