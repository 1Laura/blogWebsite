//// gaunami visi posts
// localStorage.setItem('allPosts', JSON.stringify(allPostsArray))
const posts = localStorage.getItem('allPosts')
//visu postu array
const allPosts = JSON.parse(posts)
console.log(allPosts)




let createPostData = {
    secretKey: 'as',
    title: 'ququ',
    image: '',
    description: ''
}

// POST create new post (have to have secret key)
// http://167.99.138.67:1111/createpost
// send object JSON object with these keys:
// secretKey, title, image, description
function createPost() {

    fetch('http://167.99.138.67:1111/createpost', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createPostData)
    }).then(response => response.json())
        .then(data => console.log(data))
}
createPost()
