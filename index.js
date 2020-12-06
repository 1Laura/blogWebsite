const home = document.querySelector('.home')
const register = document.querySelector('.register')
const login = document.querySelector('.login')
const out = document.querySelector('.logout')
const create = document.querySelector('.create')
home.classList.add('active')
register.classList.remove('active')
login.classList.remove('active')
out.classList.remove('active')
create.classList.remove('active')



let allPostsArray = []
const logout = document.getElementById('logout')
logout.addEventListener('click', logoutUser)

setTimeout(() => {
    // console.log(secretKey)
    console.log(allPostsArray)

}, 1000)




function logoutUser(event) {
    console.log(event)

    window.localStorage.clear();
    window.location.reload(true);

    location.replace('index.html');
}


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
            localStorage.setItem('allPosts', JSON.stringify(allPostsArray))
            displayAllPosts()
        })
}

// console.log(window.location)
const allPostBlock = document.querySelector('.allPostBlock')

function displayAllPosts() {
    allPostBlock.innerHTML = ''
    allPostsArray.map((item, index) => {
        allPostBlock.innerHTML += `
                  <div id="${item.id}" class="card">
                        <img src="${item.image}" class="card-img-top imgHo"
                             alt="">
                        <div class="card-body">
                            <h5 class="card-title titleHo">${item.title}</h5>
                            <h6 class="timeStampHo">${item.timestamp}</h6>
                            <p class="card-text descriptionHo">${item.description}</p>
                            <p class="usernameHo">${item.username}</p>
                            <p class="readMore"> <a class="${item.id}" onclick="displaySinglePost(event)" href="singlePost.html">READ MORE ...</a></p>
                        </div>
                  </div>             
        `
    })
}

function displaySinglePost(event) {
    let onReadMore;
    onReadMore = event.target.className;
    localStorage.setItem('singlePostIndex', JSON.stringify(onReadMore))
    console.log(onReadMore)
}

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
