
const qString = document.location.search;
const param = new URLSearchParams(qString);
const id = param.get("id");
const url = `https://knudsenweb.no/wp-json/wp/v2/posts/${id}?_embed=true`;
const specificH1 = document.querySelector(".h1-specific");
const specifictPost = document.querySelector(".specific-post");
const modalDiv = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const loadingAnimation = document.querySelector(".loadingDiv");

// Fetching specific blog post
function blogSpecific(post) {
    // Content
    specificH1.innerHTML = post.title.rendered;
    let img = post._embedded["wp:featuredmedia"][0].source_url;
    specifictPost.innerHTML += `<p>${post.content.rendered}</p>`;
    modalImg.innerHTML += `<img src="${img}">`;
    specifictPost.style.display = "flex";

    // Event for modal
    modalImg.addEventListener("click", function(){
        modalDiv.style.display = "flex";
        modalDiv.innerHTML = `<img src="${img}">`
        modalDiv.classList.add("modal-active");
        body.style.overflow = "hidden";
        window.scrollTo(0, 0);
        modalDiv.addEventListener("click", function() {
            modalDiv.classList.remove("modal-active");
            modalDiv.style.display = "none";
            body.style.overflow = "visible";
        });
    });

    // Meta description and title
    const title = document.querySelector("title");
    const metaDesc = document.querySelector("#metaDesc");

    // Replace p tag with empty string
    const excerpt = post.excerpt.rendered.replace("<p>", "").replace("</p>", "");
    title.innerHTML = ` The Anime Blog | ${post.title.rendered}`;

    // Trim white space at end of excerpt
    metaDesc.setAttribute("content", `${excerpt.trimEnd()}`);
}

fetch(url)
    .then(response => response.json())
    .then(data => {
        loadingAnimation.style.display = "none";
        blogSpecific(data)})
    .catch((error) => {
        console.log(error)
    });