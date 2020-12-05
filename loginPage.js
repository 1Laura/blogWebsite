// //// gaunami visi posts
// // localStorage.setItem('allPosts', JSON.stringify(allPostsArray))
// const posts = localStorage.getItem('allPosts')
// //visu postu array
// const allPosts = JSON.parse(posts)
// console.log(allPosts)

let loginKey = ''
let loginData = {
    name: '',
    password: '',
}
let userName = document.getElementById('userName')
let userPassword = document.getElementById('userPassword')
const userLoginBtn = document.getElementById('userLoginBtn')
userLoginBtn.addEventListener('click', checkLoginForm)

// POST login to get your secret key
// http://167.99.138.67:1111/login
// send JSON object with these keys:
// name, password
//secretKey: "54St16hygDNxo90Lly7j"

function login() {

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
            console.log(loginKey)
            localStorage.setItem('secretKey', JSON.stringify(loginKey))
        })

    console.log("jus esate prisilogines")
}

function checkLoginForm(event) {
    console.log(event)
    loginData.name = event.path[2].children[1].children[1].value
    loginData.password = event.path[2].children[2].children[1].value

    console.log(loginData)
    console.log(loginKey)
    login()
    setTimeout(() => {
        location.replace("index.html")
    }, 6000)

}
