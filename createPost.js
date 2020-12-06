//// gaunami visi posts
// localStorage.setItem('allPosts', JSON.stringify(allPostsArray))
// const posts = localStorage.getItem('allPosts')
// //visu postu array
// const allPosts = JSON.parse(posts)
// console.log(allPosts)

let createPostData = {
    secretKey: '',
    title: '',
    image: '',
    description: ''
}
// localStorage.setItem('secretKey', JSON.stringify(loginKey))
const secret = localStorage.getItem('secretKey')
const secretKey = JSON.parse(secret)
console.log(secretKey)

const createNewPostBtn = document.getElementById('createNewPostBtn')
createNewPostBtn.addEventListener('click', makeNewPost)

// POST create new post (have to have secret key)
// http://167.99.138.67:1111/createpost
// send object JSON object with these keys:
// secretKey, title, image, description
function sendPost() {

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


function makeNewPost(event) {
    console.log(event)
    console.log('is create post page')
    let title = event.path[2].children[0].children[1].value
    let image = event.path[2].children[1].children[1].value
    let desc = event.path[2].children[2].children[1].value

    createPostData.secretKey = secretKey
    if (title.length >= 20) {
        createPostData.title = title
    } else {
        alert('title must be at least 20 symbols length')
    }

    createPostData.image = image
    createPostData.description = desc

    console.log(title, image, desc, secretKey)
    sendPost()
    setTimeout(() => {
        location.replace("index.html")
    }, 1000)
}

