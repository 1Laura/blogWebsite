const home = document.querySelector('.home')
const register = document.querySelector('.register')
const login = document.querySelector('.login')
const out = document.querySelector('.logout')
const create = document.querySelector('.create')
home.classList.remove('active')
register.classList.add('active')
login.classList.remove('active')
out.classList.remove('active')
create.classList.remove('active')



// // localStorage.setItem('allPosts', JSON.stringify(allPostsArray))
// const posts = localStorage.getItem('allPosts')
// //visu postu array
// const allPosts = JSON.parse(posts)g
// console.log(allPosts)


const registerBlock = document.querySelector('.registerBlock')

submitRegister.addEventListener('click', checkRegisterForm)

let errorMessage

let userData = {
    name: '',
    passwordOne: '',
    passwordTwo: '',
}
console.log(userData)

//POST create new user
// http://167.99.138.67:1111/createaccount
// send JSON object with these keys:
// name, passwordOne, passwordTwo
//name min 5 simboliai
//paswordai turi sutapti ir min 5 simboliai


function registerNewAccount() {

    fetch('http://167.99.138.67:1111/createaccount', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }).then(response => response.json())
        //grizta objektas su zinute
        .then(data => {
            console.log(data)
            errorMessage = data.message
            console.log(errorMessage)
            // alert('Toks vardas jau yra ' + errorMessage)
            // location.reload()
        })

// localStorage.setItem('newAccountData', JSON.stringify(userData))
}


function checkRegisterForm(event) {
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
    setTimeout(() => {
        location.replace("index.html")
    }, 1000)
}