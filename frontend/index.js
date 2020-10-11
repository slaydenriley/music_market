const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const allUsers = document.querySelector(".all-users");
const singleUser = document.querySelector(".single-user");
const allListings = document.querySelector(".all-listings");
const BACKEND_URL = "http://localhost:3000"

function hideLogin() {
  loginForm.style.display = "none"
};

function hideSignup() {
  signupForm.style.display = "none"
}

hideLogin()
hideSignup()

login.addEventListener('click', function showLogin() {
  hideSignup()
  loginForm.style.display = "block"
})

signup.addEventListener('click', function showSignup() {
  hideLogin()
  signupForm.style.display = "block"
})

users.addEventListener('click', function showUsers() {
  fetch(`${BACKEND_URL}/users`)
  .then(users => users.json())
  .then(users => renderUsers(users))
})

function renderUsers(users) {
  allUsers.innerHTML = ""
    users.forEach(user => {
        allUsers.innerHTML += `<div>
        <h3> ${user.name} <h3>

      </div>`
    })
}

const loginsubmit = document.querySelector(".loginsubmit")

loginsubmit.addEventListener('click', (e) => {
  logIn(e)
})

function logIn() {
  let userInputForUsername = document.querySelector("#username").value;
  let userInputForPassword = document.querySelector("#password").value;

  let formData = {
      username: userInputForUsername,
      password: userInputForPassword
  }

  let configObj = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(formData)
  }

  fetch(`${BACKEND_URL}/login`, configObj)
  .then(user => user.json())
  .then(user => showMainPage(user))
}


function showMainPage(user) {
  hideLogin()
  hideSignup()
  singleUser.innerHTML += `<div><h3> Welcome ${user.name}! <h3></div>`
  showListings()
}

function showListings() {
  console.log("called!")
  fetch(`${BACKEND_URL}/listings`)
  .then(list => list.json())
  .then(list => renderList(list))
}

function renderList(list) {
  console.log(list)
  list.forEach(listing => {
    console.log(listing)
    allListings.innerHTML += `<div><h3> ${listing} <h3></div><br/>`
  })
}
function showUser(resp) {

}
