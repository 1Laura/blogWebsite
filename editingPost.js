//// gaunami visi posts
// localStorage.setItem('allPosts', JSON.stringify(allPostsArray))
const posts = localStorage.getItem('allPosts')
//visu postu array
const allPosts = JSON.parse(posts)
console.log(allPosts)



// POST update existing post (have to have secret key)
// http://167.99.138.67:1111/updatepost
// send JSON object with these keys:
// secretKey, title, image, description, id (id stands for post id)
// function updatePost() {
//     let updatePostData = {
//         secretKey: 'as',
//         title: 'ququ',
//         image: 'dfg',
//         description: 'dfg',
//         id: ''
//     }
//     fetch('http://167.99.138.67:1111/updatepost', {
//         method: 'POST',
//         mode: 'cors',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(updatePostData)
//     }).then(response => response.json())
//         .then(data => console.log(data))
// }
// updatePost()
