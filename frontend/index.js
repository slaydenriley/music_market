const loginForm = document.querySelector(".login-form");

function hideLogin() {
  loginForm.style.display = "none"
};

hideLogin()

login.addEventListener('click', function showLogin() {
  loginForm.style.display = "block"
})
