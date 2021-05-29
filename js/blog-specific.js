
const qString = document.location.search;
const param = new URLSearchParams(qString);
const id = param.get("id");
const url = `https://knudsenweb.no/wp-json/wp/v2/posts/${id}?_embed=true`;
const specificH1 = document.querySelector(".h1-specific");
const specifictPost = document.querySelector(".specific-post");
const modal = document.querySelector(".modal-img");
const loadingAnimation = document.querySelector(".loadingDiv");

// Fetching specific blog post
function blogSpecific(post) {
    specificH1.innerHTML = post.title.rendered;
    let img = post._embedded["wp:featuredmedia"][0].source_url;
    specifictPost.innerHTML += `<p>${post.content.rendered}</p>`
    modal.innerHTML += `<img src="${img}">`

    modal.addEventListener("click", function(){
        modal.classList.toggle("modal-active");
        if (specifictPost.style.display === "none") {
            specifictPost.style.display = "block";
        } else {
            specifictPost.style.display = "none";
        }
    });
}


fetch(url)
    .then(response => response.json())
    .then(data => {
        loadingAnimation.style.display = "none";
        modal.style.display = "flex";
        specifictPost.style.display = "block";
        blogSpecific(data)})
    .catch((error) => {
        console.log(error)
    });