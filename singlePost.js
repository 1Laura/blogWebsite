// localStorage.setItem('allPosts', JSON.stringify(allPostsArray))
const posts = localStorage.getItem('allPosts')
//visu postu array
const allPosts = JSON.parse(posts)
console.log(allPosts)


// localStorage.setItem('singlePostIndex', JSON.stringify(onReadMore))
const singlePost = localStorage.getItem('singlePostIndex')
//index to kurio paspaudziau Read more
const singlePostIndex = JSON.parse(singlePost)
//cia yra stringas
console.log(singlePostIndex)

const imagePo = document.getElementById('imagePo')
const timeStampPo = document.querySelector('.timeStampPo')
const titlePo = document.querySelector('.titlePo')
const descriptionPo = document.querySelector('.descriptionPo')
const usernamePo = document.querySelector('.usernamePo')


displaySinglePost()

function displaySinglePost() {
    let oneSingleSmallPost = allPosts.filter(item => item.id === singlePostIndex)
    oneSingleSmallPost.map(item => {
        imagePo.src = item.image
        timeStampPo.innerText = item.timestamp
        titlePo.innerText = item.title
        descriptionPo.innerText = item.description
        usernamePo.innerText = item.username

    })
}



