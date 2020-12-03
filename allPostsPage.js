let allPostsBlock = document.querySelector('.allPostsBlock')


// let object = ['Laura', 99]
// // localStorage.setItem('person', JSON.stringify(object))
// const raw = localStorage.getItem('person')
// const person = JSON.parse(raw)
// person[0] = 'krabas'
// console.log(person)

// window.addEventListener('storage', event => {
//     console.log(event)
// })

let allPostsArray = []
setTimeout(() => {
    console.log(allPostsArray)

}, 1000)


// const postBlock = document.getElementById('postBlock')
// const postTimestamp = document.getElementById('postTimestamp')
// const username = document.getElementById('username')
// const postTitle = document.getElementById('postTitle')
// const postImg = document.getElementById('postImg')
// const postDescription = document.getElementById('postDescription')

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

function displayAllPosts() {
    // console.log(allPostsBlock.className)


    allPostsArray.map((item, index) => {

        allPostsBlock.innerHTML += `
               <div id="${item.id}" class="card">
                    <div class="postImgSize d-flex justify-content-center">
                        <img id="postImg" src="${item.image}" alt="...">
                    </div>
                    <div class="card-body">
                        <h6 id="postTimestamp">${item.timestamp}</h6>
                        <h5 id="postTitle" class="card-title">${item.title}</h5>
                        <h6 id="username">${item.username}</h6>
                        <p id="postDescription" class="card-text">${item.description}</p>
 <!--                     <p onclick="displayReadMore" class="readMore">READ MORE...</p>-->                                             
                         <p class="readMore"> <a class="${item.id}" onclick="displaySinglePost(event)" href="singlePost.html">READ MORE ...</a></p>
                   </div>
 <!--                 <div class="card-footer">-->
 <!--                    <button id="deleteBtn" class="button">DELETE</button>-->
 <!--                 </div>-->
              </div>`
        // console.log(item.id)
    });
}

// document.getElementById("myBtn").addEventListener("click", displayDate);


function displaySinglePost(event) {
    let onReadMore;
    onReadMore = event.target.className;
    localStorage.setItem('singlePostIndex', JSON.stringify(onReadMore))
    console.log(onReadMore)
}