


let userData = {
    name: 'Labas',
    passwordOne: 'krabas',
    passwordTwo: 'krabas',

}

let allPostsArray = []
let loginKey = ''
setTimeout(() => {
    console.log(loginKey)
    console.log(allPostsArray)
}, 1000)


// localstorage.setItem("pavadinimas", "vertė"),
// localStorage.getItem("pavadinimas")
// j0g vertė turi būt stringo fomrato, tai turi jus JSON.strigify paverst i stringą,
// o kai pasiemi atgal sukonvertuot su JSON.parse()
// localStorage

// GET all posts
// http://167.99.138.67:1111/getallposts

getAllPosts()

function getAllPosts() {
    fetch('http://167.99.138.67:1111/getallposts')
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => {
            //grizta data OBJEKTAS :)
            allPostsArray = data.data
            displayAllPosts()

        })
}

// console.log(window.location)



// function displayAllPosts() {
//     allPostsArray.map(item => {
//         let postBlock = document.createElement('div')
//         postBlock.classList.add('postBlock')
//         postBlock.setAttribute('id', item.id)
//
//         let postTimestamp = document.createElement('div')
//         // postTimestamp.classList.add('time')
//         postTimestamp.innerText = item.timestamp
//
//         let username = document.createElement('h4')
//         username.innerText = item.username
//
//         let postTitle = document.createElement('h3')
//         postTitle.innerText = item.title
//
//         let imagePost = document.createElement('div')
//         imagePost.classList.add('imagePost')
//
//         let postImg = document.createElement('img')
//         postImg.src = item.image
//
//         let postDescription = document.createElement('p')
//         postDescription.innerText = item.description
//
//
//         let editPostBtn = document.createElement('button')
//         editPostBtn.classList.add('button')
//         editPostBtn.innerText = 'EDIT'
//         // editPostBtn.addEventListener("click", editPost)
//
//         let deletePostBtn = document.createElement('button')
//         deletePostBtn.classList.add('button')
//         deletePostBtn.innerText = 'DELETE'
//         // deletePostBtn.addEventListener("click", deletePost)
//
//
//         imagePost.appendChild(postImg)
//         let allPostsElements = [postTimestamp, username, postTitle, imagePost, postDescription, editPostBtn, deletePostBtn]
//         allPostsElements.map(item => {
//             postBlock.appendChild(item)
//
//         })
//         console.log(postBlock)
//         allPostsBlock.appendChild(postBlock)
//
//     })
// }


//POST create new user
// http://167.99.138.67:1111/createaccount
// send JSON object with these keys:
// name, passwordOne, passwordTwo
//name min 5 simboliai
//paswordai turi sutapti ir min 5 simboliai

function createAccount() {

    fetch('http://167.99.138.67:1111/createaccount', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }).then(response => response.json())
        .then(data => console.log(data))
}

// createAccount()


// POST login to get your secret key
// http://167.99.138.67:1111/login
// send JSON object with these keys:
// name, password
//secretKey: "54St16hygDNxo90Lly7j"

function login() {
    let loginData = {
        name: userData.name,
        password: userData.passwordOne,
    }
    fetch('http://167.99.138.67:1111/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    }).then(response => response.json())
        .then(data => {
            loginKey = data.secretKey
        })
}

login()


// POST create new post (have to have secret key)
// http://167.99.138.67:1111/createpost
// send object JSON object with these keys:
// secretKey, title, image, description
// function createPost() {
//     let createPostData = {
//         secretKey: 'as',
//         title: 'ququ',
//         image: '',
//         description: ''
//     }
//     fetch('http://167.99.138.67:1111/createpost', {
//         method: 'POST',
//         mode: 'cors',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(createPostData)
//     }).then(response => response.json())
//         .then(data => console.log(data))
// }
// createPost()


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


// POST delete existing post (have to have secret key)
// http://167.99.138.67:1111/deletepost
// send JSON object with these keys:
// secretKey, id (id stands for post id)
// function deletePost() {
//     let deletePostData = {
//         secretKey: 'as',
//         id: ''
//     }
//     fetch('http://167.99.138.67:1111/deletepost', {
//         method: 'POST',
//         mode: 'cors',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(deletePostData)
//     }).then(response => response.json())
//         .then(data => console.log(data))
// }
// deletePost()


//GET particular user posts
// http://167.99.138.67:1111/getuserposts/:name
// put user name instead of ":name"
// function getUserAllPosts() {
//     fetch(`http://167.99.138.67:1111/getuserposts/${name}`)
//         .then(response => response.json())
//         .then(data => console.log(data))
// }
// getUserAllPosts()


//GET particular post
// http://167.99.138.67:1111/getsinglepost/:name/:id'
// put user name instead of ":name" and post id instead of ":id"
// function getUserPostOnePost() {
//     fetch(`http://167.99.138.67:1111/getsinglepost/${name}/${id}`)
//         .then(response => response.json())
//         .then(data => console.log(data))
// }
// getUserPostOnePost()


// CREATE BLOG WEBSITE

// Website should have these pages:
// REGISTER USER PAGE - page when user has to register
// USER LOGIN PAGE - page where user logs in and gets secret key (for further operations)
// ALL BLOG POSTS PAGE - page where all blog posts are visible (could be main page - index page)
// SINGLE POST PAGE - page which opens when single post is selected
// PARTICULAR USER POSTS PAGE - page which opens when you choose to see particular user posts
// PAGE FOR POST EDITING - page which opens when i click edit button on post i own

// Website should have these validations:
// when registering new user inputs should be validated in front-end (try sending random stuff to test api)
// when logging in there should also be validations depending on errors received from back-end
// when creating new post
// when updating post

// website should have these additional functions:
// some kind of modal pops up and asks for confirmation when user tries to delete own post
// modal pops up and asks for confirmation when user edits existing post
// there should be possibility to filter posts by date
// index page should look like - https://coney.qodeinteractive.com/pinterest-home/
// whole website styles should also be as close to example as possible
// please notice - only index page is required to look exact as example
// other pages has to have similar style but structure is up to you creative minds
// semantic tags should be used in html
// code shoulde be pushed to github and exported as static web page