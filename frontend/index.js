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
