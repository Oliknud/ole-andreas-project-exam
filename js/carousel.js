const container = document.querySelector(".container");
const slide = document.querySelector(".carousel");
const img = document.querySelectorAll(".carousel img");
const back = document.querySelector(".back");
const next = document.querySelector(".next");

// counter & container size
let c = 1;
const imgSize = container.clientWidth;
console.log(imgSize)

// slide.style.transform = "translateX(0px)";

// Next button
next.addEventListener("click", function(){
    
    if (c >= 8) {
        slide.style.transform = "translateX(0px)";
    } else {
        slide.style.transition = "transform 0.5s ease-in-out";
        slide.style.transform = "translateX(" + (-imgSize * c) + "px)";
        c++;
    }
        
    
});

// Prev button
back.addEventListener("click", function(){
    if (c <= 0) {
        slide.style.transform = "translateX(0px)";
        
    }
    slide.style.transition = "transform 0.5s ease-in-out";
    slide.style.transform = "translateX(" + (-imgSize * c) + "px)";
    c--;
});


// Code for looping carousel *Only html code*
// slide.addEventListener("transitionend", function() {
//     if (img[c].id === "last") {
//         slide.style.transition = "none";
//         c = img.length -2;
//         slide.style.transform = "translateX(" + (-imgSize * c) + "px)";
//     } 

//     if (img[c].id === "first") {
//         slide.style.transition = "none";
//         c = img.length - c;
//         slide.style.transform = "translateX(" + (-imgSize * c) + "px)";
//     } 
// });
