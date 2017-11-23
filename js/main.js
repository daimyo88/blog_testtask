$(document).ready(function() {

 var localPostsString = localStorage.getItem('posts');
 var posts = [];

 if (localPostsString) {
   posts = JSON.parse(localStorage.getItem('posts')).data;
 }
 renderPosts();
  // if data exists than setting it into variable and render posts

 function renderPosts() {
   $('#post-container').html('');
   for (var i = 0; i < posts.length; i++) {
     $('#post-container').append('<h3>' + posts[i] + '</h3>');
   }
 }

 function addPost(newPost) {
   posts.push(newPost);
   renderPosts();
   var newPosts = { data : posts };
   localStorage.setItem('posts', JSON.stringify(newPosts));
   //adding new item into posts variable and also localStorage
 }

 $('#new-post-form').on('submit', function(e) {
   e.preventDefault();
   var data = $('#newPostMessage').val();
   addPost(data);
   renderPosts();
   this.reset();
   $('#newPostMessage').focus();
   //getting value from textarea, adding new post, cleaning from and focus on
   // textarea again
 });

});
