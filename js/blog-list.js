const url = "https://knudsenweb.no/wp-json/wp/v2/posts?_embed=true";
const postContainer = document.querySelector(".posts");
const singlePost = document.querySelector(".single-post");
const loadMore = document.querySelector(".load-more");

// Fetch and display list of posts
function blogList(posts) {
    for (post of posts) {
        let img = post._embedded["wp:featuredmedia"][0].source_url;
        
        postContainer.innerHTML += `<div class="single-post">
                                        <img src="${img}">
                                        <div class="single-post-text">
                                            <h2>${post.title.rendered}</h2>
                                            <a href="blogspecific.html?id=${post.id}" class="read-more">View</a>
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