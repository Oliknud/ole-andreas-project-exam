const url = "https://knudsenweb.no/wp-json/wp/v2/posts?_embed=true";
const postContainer = document.querySelector(".posts");
const singlePost = document.querySelector(".single-post");


function blogList(posts) {
    for (post of posts) {
        let img = post._embedded["wp:featuredmedia"][0].source_url;
        console.log(img);
        postContainer.innerHTML += `<div class="single-post">
                                        <img src="${img}">
                                        <div>
                                            <h2>${}</h2>
                                            <p></p>
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