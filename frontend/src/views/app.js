const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const allUsers = document.querySelector(".all-users");
const singleUser = document.querySelector(".single-user");
const allListings = document.querySelector(".all-listings-cards");
const loginsubmit = document.querySelector(".loginsubmit");
const headerright = document.querySelector(".headerright");
const listingForm = document.querySelector(".listing-form");
const BACKEND_URL = "http://localhost:3000";

let current_user_id
let newListingButton = document.querySelector(".new-listing-button")


function clearPage() {
  loginForm.style.display = "none"
  signupForm.style.display = "none"
  logout.style.display = "none"
  allListings.style.display = "none"
  listingForm.style.display = "none"
  account.style.display = "none"
  listings_button.style.display = "none"
  users.style.display = "none"
}

class App {
  constructor() {
    this.listeners()
    clearPage()
  }

  listeners() {
    login.addEventListener('click', function showLogin() {
      clearPage()
      loginForm.style.display = "block"
    })

    signup.addEventListener('click', function showSignup() {
      clearPage()
      signupForm.style.display = "block"
    })

    signup_submit.addEventListener('click', (e) => {
      signUp(e)
    })

    loginsubmit.addEventListener('click', (e) => {
      clearPage()
      logIn(e)
    })

    logout.addEventListener('click', function logout() {
      if (confirm("Are you sure you want to logout?")) {
        alert("Logging you out!");
        localStorage.clear();
        window.location.reload();
      }
      else {
        alert("Not logged out");
      }
    })
  }
}

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
  clearPage()
  const listingsClass = new Listings
  const usersClass = new Users
  //Hide Login + Signup Buttons
  login.style.display = "none"
  signup.style.display = "none"
  //Show Main Menu
  logout.style.display = "block"
  listings_button.style.display = "block"
  users.style.display = "block"
  account.style.display = "block"
  headerright.innerHTML += `<em> Welcome ${user.name}!</em>`
  current_user_id = user.id
}

function signUp() {
  let userInputForName = document.querySelector("#name").value;
  let userInputForNewUsername = document.querySelector("#signup_username").value;
  let userInputForPassword = document.querySelector("#signup_password").value;
  let userInputForPasswordConfirmation = document.querySelector("#password_confirm").value;
  let userInputForEmail = document.querySelector("#email").value;

  let formData = {
    user: {
      name: userInputForName,
      password: userInputForPassword,
      password_confirmation: userInputForPasswordConfirmation,
      username: userInputForNewUsername,
      email: userInputForEmail
    }
  }

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }


  fetch(`${BACKEND_URL}/signup`, configObj)
  .then(user => user.json())
  .then(user => showMainPage(user))

}
