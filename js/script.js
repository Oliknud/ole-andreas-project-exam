// const url = "https://knudsenweb.no/wp-json/wp/v2/posts?_embed=true";
// const carouselContainer = document.querySelector(".carousel");

// // Fetching and display images to carousel
// function blogList(posts) {
//     for (post of posts) {
//         let img = post._embedded["wp:featuredmedia"][0].source_url;
//         carouselContainer.innerHTML += `<div class="card">
//                                             <img src="${img}">
//                                         <div class="card-right">
//                                             <h3>${post.title.rendered}</h3>
//                                             <a href="blogspecific.html?id=${post.id}" class="read-more">Les mer</a>
//                                         </div>
//                                         </div>`                     
//     }
// }

// fetch(url)
//     .then(response => response.json())
//     .then(data => blogList(data))
//     .catch((error) => {
//         console.log(error)
//     });