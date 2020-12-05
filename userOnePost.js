//// gaunami visi posts
// localStorage.setItem('allPosts', JSON.stringify(allPostsArray))
const posts = localStorage.getItem('allPosts')
//visu postu array
const allPosts = JSON.parse(posts)
console.log(allPosts)