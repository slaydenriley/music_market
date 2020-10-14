const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const allUsers = document.querySelector(".all-users");
const singleUser = document.querySelector(".single-user");
const allListings = document.querySelector(".all-listings");
const loginsubmit = document.querySelector(".loginsubmit")
const BACKEND_URL = "http://localhost:3000"

Welcome()

function hideLogin() {
  loginForm.style.display = "none"
};

function hideSignup() {
  signupForm.style.display = "none"
}

function hideLogout() {
  logout.style.display = "none"
}

function Welcome() {
  hideLogin()
  hideSignup()
  hideLogout()
}

login.addEventListener('click', function showLogin() {
  hideSignup()
  loginForm.style.display = "block"
})

signup.addEventListener('click', function showSignup() {
  hideLogin()
  signupForm.style.display = "block"
})

loginsubmit.addEventListener('click', (e) => {
  logIn(e)
})

logout.addEventListener('click', function logout() {
  localStorage.clear();
  window.location.reload();
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
  hideButtons()
  showLogout()
  singleUser.innerHTML += `<div><p><em> Welcome ${user.name}! <p></em></div>`
  showListings()
}

function hideButtons() {
  login.style.display = "none"
  signup.style.display = "none"
}

function showLogout() {
  logout.style.display = "block"
}

function showListings() {
  fetch(`${BACKEND_URL}/listings`)
  .then(list => list.json())
  .then(list => renderList(list))
}

function renderList(list) {
  console.log(list)
  list.forEach(listing => {
    allListings.innerHTML += `<div><h2> ${listing.title} - ${listing.price} <h2></div>`
  })
}
