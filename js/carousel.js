const container = document.querySelector(".container");
const slide = document.querySelector(".carousel");
// const img = document.querySelectorAll(".carousel img");
const back = document.querySelector(".back");
const next = document.querySelector(".next");

const url = "https://knudsenweb.no/wp-json/wp/v2/posts?_embed=true&per_page=8";
const carouselContainer = document.querySelector(".carousel");

// Fetching and display images to carousel
function blogList(posts) {
    for (post of posts) {
        let img = post._embedded["wp:featuredmedia"][0].source_url;
        carouselContainer.innerHTML += `<div class="card">
                                            <img src="${img}">
                                            <div class="card-right">
                                                <h3>${post.title.rendered}</h3>
                                                <a href="blogspecific.html?id=${post.id}" class="read-more">Les mer</a>
                                            </div>
                                        </div>`                     
    }
}

fetch(url)
    .then(response => response.json())
    .then(data => blogList(data))
    .catch((error) => {
        console.log(error)
    });



// counter & container size
let c = 0;
const imgSize = container.clientWidth;
console.log(imgSize)

slide.style.transform = "translateX(0px)";

// Next button


next.addEventListener("click", function() {
    if (imgSize === 260 && c >= 7) {
        c = 0;
        slide.style.transform = "translateX(0px)";
        c--;
    } else if (imgSize === 700 && c >= 3){
        c = 0;
        slide.style.transform = "translateX(0px)";
        c--;
    } else if (imgSize === 1400 && c >= 1){
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
    if ( imgSize === 280 && c <= 0) {
        c = 7;
        c++;
    } else if ( imgSize === 700 && c <= 0) {
        c = 3;
        c++;
    } else if (imgSize === 1400 && c <= 0){
        c = 1;
        c++;
    }
    
    slide.style.transition = "transform 0.5s ease-in-out";
    c--;
    slide.style.transform = "translateX(" + (-imgSize * c) + "px)";
    
});

