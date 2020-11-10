class SessionFetcher {
  constructor() {
    if (loggingIn == true) {
      this.logIn();
    };
    else if (signingUp == true) {
      this.signUp();
    };
    else {
      console.log("well....?")
    };
  };

  logIn() {
    let userInputForUsername = document.querySelector("#username").value;
    let userInputForPassword = document.querySelector("#password").value;

    let formData = {
        username: userInputForUsername,
        password: userInputForPassword
      };

      let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(formData)
        };

      fetch(`${BACKEND_URL}/login`, configObj)
      .then(user => user.json())
      .then(user => showMainPage(user))
  };

  signUp() {
    console.log("we are on signup")
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
      };
    };

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };


    fetch(`${BACKEND_URL}/signup`, configObj)
    .then(user => user.json());
    .then(user => showMainPage(user));
  };
}
