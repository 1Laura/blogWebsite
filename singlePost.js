let allPostsArray = []

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
            displaySinglePost

        })
}
function displaySinglePost(){
    console.log('labas')
}