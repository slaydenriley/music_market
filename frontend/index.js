const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const allUsers = document.querySelector(".all-users");
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

function logIn(e) {
    e.preventDefault();

    let userInputForUsername = document.querySelector("#usernameForLogIn").value;

    let formData = {
        username: userInputForUsername
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
    .then(resp => resp.json())
    .then(parsedResp => {
        if (parsedResp.username) {

            newComment(parsedResp.id);

            const currentUser = document.querySelector("#current-user");
            currentUser.innerText = parsedResp.username;

            const highScore = document.querySelector("#levels-completed");
            if (parsedResp.levels_completed === 0) {
                highScore.innerText = `${parsedResp.levels_completed} levels completed`;
            } else if (parsedResp.levels_completed === 1) {
                highScore.innerText = `${parsedResp.levels_completed} level completed`;
            }
        }
    });
}
