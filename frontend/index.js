const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");

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
  fetch("http://localhost:3000/users")
  .then(users => users.json())
  .then(users => console.log(users[0].name))
})
