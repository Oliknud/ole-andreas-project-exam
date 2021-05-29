const url = "https://knudsenweb.no/wp-json/wp/v2/posts?_embed=true";
let i = 10;
const urlMoreResults = `https://knudsenweb.no/wp-json/wp/v2/posts?_embed=true&per_page=10&offset=${i}`;
const postContainer = document.querySelector(".posts");
const singlePost = document.querySelector(".single-post");
const loadMore = document.querySelector(".load-more");
const loadingAnimation = document.querySelector(".loadingDiv");

// Fetch and display list of posts
function blogList(posts) {
    for (post of posts) {
        let img = post._embedded["wp:featuredmedia"][0].source_url;
        
        postContainer.innerHTML += `<div class="single-post">
                                        <img src="${img}">
                                        <div class="single-post-text">
                                            <h2>${post.title.rendered}</h2>
                                            <a href="blogspecific.html?id=${post.id}" class="read-more">View post</a>
                                        </div>
                                    </div>`
    }
}

loadMore.addEventListener("click", function() {
    i += 2;
    if (i >= 12) {
        loadMore.style.display = "none";
    }

    fetch(urlMoreResults)
    .then(response => response.json())
    .then(data => blogList(data))
    .catch((error) => {
        console.log(error)
    });
});

fetch(url)
    .then(response => response.json())
    .then(data => {
        loadingAnimation.style.display = "none";
        loadMore.style.display = "flex";
        blogList(data)})
    .catch((error) => {
        console.log(error)
    });