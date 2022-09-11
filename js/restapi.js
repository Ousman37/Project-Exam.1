$(document).ready(function () {
  alert("alert");
  $.ajax({
    method: "GET",
    url: `https://flowerpowersupply.com/wp-json/wp/v2/posts`,
    success: function (data) {
      console.log(data);
      data.forEach((post) => {
        $("#posts").append(`
<a href="#" class="article d-grid">
  <div class="older-posts-article-image-wrapper">
    <img
      src="${post.jetpack_featured_media_url}"
      alt="food"
      class="article-image"
    />
  </div>
  <div class="article-data-container">
    <div class="article-data">
      <span>${post.date}</span>
      <span class="article-data-spacer"></span>
      <span>10 mis red</span>
    </div>
    <h3 class="title article-title">${post.title.rendered}
    </h3>
    <p class="article-description"> ${post.content.rendered}  
    </p>
    <button type="button" class="cta place-items-center">
      Get the Recipe
    </button>
  </div>
</a>
            
           
           
           
           
           
           
            
             `);
      });
    },
  });
});
