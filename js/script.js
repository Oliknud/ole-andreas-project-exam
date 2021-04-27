const url = "https://knudsenweb.no/wp-json/wp/v2/posts?_embed";
const main = document.querySelector(".main-home");


function blogList(posts) {
    for (post of posts) {
        let img = post._embedded["wp:featuredmedia"][0].source_url;
        console.log(post.title.rendered);
        main.innerHTML += `<img src="${img}">`
    }
}




fetch(url)
    .then(response => response.json())
    .then(data => blogList(data))
    .catch((error) => {
        console.log(error)
    });