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

// const home = document.querySelector('.home')
home.classList.add('active')


const imagePo = document.getElementById('imagePo')
const timeStampPo = document.querySelector('.timeStampPo')
const titlePo = document.querySelector('.titlePo')
const descriptionPo = document.querySelector('.descriptionPo')
const usernamePo = document.querySelector('.usernamePo')

let deletePostData = {
    secretKey: '',
    id: ''
}

const editPostBtn = document.getElementById('editPostBtn')
const deletePostBtn = document.getElementById('deletePostBtn')

// editPostBtn.addEventListener('click', updatePost)
deletePostBtn.addEventListener('click', checkDeletePost)

displaySinglePost()

function displaySinglePost() {
    let oneSingleSmallPost = allPosts.filter(item => item.id === singlePostIndex)
    oneSingleSmallPost.map(item => {
        imagePo.src = item.image
        timeStampPo.innerText = item.timestamp
        titlePo.innerText = item.title
        descriptionPo.innerText = item.description
        usernamePo.innerText = item.username
        console.log(item.id)

    })
}

// <p class="readMore"> <a class="${item.id}" onclick="displaySinglePost(event)"
// href="singlePost.html">READ MORE ...</a></p>


// POST delete existing post (have to have secret key)
// http://167.99.138.67:1111/deletepost
// send JSON object with these keys:
// secretKey, id (id stands for post id)

function deletePost() {

    fetch('http://167.99.138.67:1111/deletepost', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(deletePostData)
    }).then(response => response.json())
        .then(data => console.log(data))
}


function checkDeletePost(event) {
    console.log(event)
    deletePostData.secretKey = secretKey
    deletePostData.id = singlePostIndex
    deletePost()
    console.log(secretKey, singlePostIndex + ' sitie turejo buti istrinti')
    // let deletedPost = allPosts.filter(item => item.id == singlePostIndex)
    setTimeout(() => {
        location.replace("index.html")
    }, 1000)
}

