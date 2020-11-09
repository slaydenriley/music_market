
/*
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

  function hideListings() {
    allListings.style.display = "none"
    listingForm.style.display = "none"
  }

  function hideLoggedButtons() {
    account.style.display = "none"
    listings.style.display = "none"
    users.style.display = "none"

  }

  function Welcome() {
    hideLogin()
    hideSignup()
    hideLogout()
    hideLoggedButtons()
    hideListings()
  }

  function clearPage() {

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
    if (confirm("Are you sure you want to logout?")) {
      alert("Logging you out!");
      localStorage.clear();
      window.location.reload();
    }
    else {
      alert("Not logged out");
    }
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

  signup_submit.addEventListener('click', (e) => {
    signUp(e)
  })

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

  function showMainPage(user) {
    hideLogin()
    hideSignup()
    hideButtons()
    showButtons()
    headerright.innerHTML += `<em> Welcome ${user.name}!</em>`

    current_user_id = user.id
  }

  function hideButtons() {
    login.style.display = "none"
    signup.style.display = "none"
  }

  function showButtons() {
    logout.style.display = "block"
    listings.style.display = "block"
    users.style.display = "block"
    account.style.display = "block"
  }
*/
