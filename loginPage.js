// //// gaunami visi posts
// // localStorage.setItem('allPosts', JSON.stringify(allPostsArray))
// const posts = localStorage.getItem('allPosts')
// //visu postu array
// const allPosts = JSON.parse(posts)
// console.log(allPosts)

let loginKey = ''

let loginData = {
    name: userData.name,
    password: userData.passwordOne,
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
        })

    console.log("jus esate prisilogines")
}

// window.open("index.html")

function checkLoginForm(event) {
    let inputName = event.path[2].children[1].children[1].value
    let pass1 = event.path[2].children[2].children[1].value
    let pass2 = event.path[2].children[3].children[1].value

    // let existUserName = allPosts.filter(item => item.username === inputName)

    // inputName.length >= 5 ? userData.name = inputName : alert('Name has to be at least 5 symbols length'), location.reload();
    // !!pass1 === !!pass2 ? userData.passwordOne = pass1 : alert('Password should match')
    // !!pass2 === !!pass1 ? userData.passwordTwo = pass2 : alert('Password should match')


    if (pass1.length >= 5 && pass2.length >= 5) {
        if (pass1 === pass2) {
            userData.passwordOne = pass1
            userData.passwordTwo = pass2
        } else {
            alert('Password should match')
            location.reload()
        }
        if (inputName.length >= 5) {
            userData.name = inputName
        } else {
            alert('Name has to be at least 5 symbols length')
            location.reload()
        }
    } else {
        alert('Password should be at least 5 symbols length')
        location.reload()
    }
    console.log(userData)
    registerNewAccount()
}