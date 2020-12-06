const home = document.querySelector('.home')
const register = document.querySelector('.register')
const login = document.querySelector('.login')
const out = document.querySelector('.logout')
const create = document.querySelector('.create')
home.classList.remove('active')
register.classList.remove('active')
login.classList.remove('active')
out.classList.remove('active')
create.classList.remove('active')




//// gaunami visi posts
// localStorage.setItem('allPosts', JSON.stringify(allPostsArray))
const posts = localStorage.getItem('allPosts')
//visu postu array
const allPosts = JSON.parse(posts)
console.log(allPosts)

// localStorage.setItem('secretKey', JSON.stringify(loginKey))
const secret = localStorage.getItem('secretKey')
const secretKey = JSON.parse(secret)
console.log(secretKey)

// localStorage.setItem('singlePostIndex', JSON.stringify(onReadMore))
const singlePost = localStorage.getItem('singlePostIndex')
//index to kurio paspaudziau Read more
const singlePostIndex = JSON.parse(singlePost)
//cia yra stringas
console.log(singlePostIndex)

let updatePostData = {
    secretKey: '',
    title: '',
    image: '',
    description: '',
    id: ''
}
let inputTitle = document.querySelector('.inputTitle')
let inputImage = document.querySelector('.inputImage')
let inputDesc = document.querySelector('.inputDesc')
const updateBtn = document.getElementById('updatePostBtn')
updateBtn.addEventListener('click', updateFields)

// POST update existing post (have to have secret key)
// http://167.99.138.67:1111/updatepost
// send JSON object with these keys:
// secretKey, title, image, description, id (id stands for post id)

displayUpdatedPost()

function updatePost() {
    fetch('http://167.99.138.67:1111/updatepost', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatePostData)
    }).then(response => response.json())
        .then(data => console.log(data))
}

function displayUpdatedPost() {
    let currentPost = allPosts.filter(item => item.id === singlePostIndex)
    console.log(currentPost)
    currentPost.map(item => {
        inputImage.value = item.image
        inputTitle.value = item.title
        inputDesc.value = item.description
    })

}

function updateFields(event) {
    let title = event.path[2].children[0].children[1].value
    let image = event.path[2].children[1].children[1].value
    let desc = event.path[2].children[2].children[1].value

    updatePostData.secretKey = secretKey

    if (title.length >= 20) {
        updatePostData.title = title
    } else {
        alert('title must be at least 20 symbols length')
    }

    updatePostData.image = image
    updatePostData.description = desc
    updatePostData.id = singlePostIndex

    updatePost
    console.log(updatePostData)
    setTimeout(() => {
        location.replace("index.html")
    }, 1000)
}
