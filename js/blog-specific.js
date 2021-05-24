
const qString = document.location.search;
const param = new URLSearchParams(qString);
const id = param.get("id");
const url = `https://knudsenweb.no/wp-json/wp/v2/posts/${id}?_embed=true`;
const specificH1 = document.querySelector(".h1-specific");
const specifictPost = document.querySelector(".specific-post");

// Fetching specific blog post
function blogSpecific(post) {
    specificH1.innerHTML = post.title.rendered;
    let img = post._embedded["wp:featuredmedia"][0].source_url;
    specifictPost.innerHTML += `<img src="${img}">
                                <p>${post.content.rendered}</p>`
}



fetch(url)
    .then(response => response.json())
    .then(data => blogSpecific(data))
    .catch((error) => {
        console.log(error)
    });