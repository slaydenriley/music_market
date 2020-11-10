// HTML ELEMENTS ASSIGNED TO VARIABLES //
const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const allUsers = document.querySelector(".all-users");
const singleUser = document.querySelector(".single-user");
const allListings = document.querySelector(".all-listings-cards");
const loginsubmit = document.querySelector(".loginsubmit");
const headerright = document.querySelector(".headerright");
const listingForm = document.querySelector(".listing-form");
const BACKEND_URL = "http://localhost:3000";

let signingUp = false;
let loggingIn = false;
let current_user_id;
let newListingButton = document.getElementById("new-listing-button");

// APP CLASS INSTANIATED FROM INDEX.JS //
class App {
  constructor() {
    this.listeners();
    App.clearPage();
  };

  listeners() {
    login.addEventListener('click', function showLogin() {
      App.clearPage();
      loginForm.style.display = "block";
    });

    signup.addEventListener('click', function showSignup() {
      App.clearPage();
      signupForm.style.display = "block";
    });

    signup_submit.addEventListener('click', (e) => {
      App.clearPage();
      signingUp = true;
      let signUp = new SessionFetcher;
    });

    loginsubmit.addEventListener('click', (e) => {
      App.clearPage();
      loggingIn = true;
      let logIn = new SessionFetcher;
    });

    logout.addEventListener('click', function logout() {
      if (confirm("Are you sure you want to logout?")) {
        alert("Logging you out!");
        localStorage.clear();
        window.location.reload();
      }
      else {
        alert("Not logged out");
      };
    });
  };

  static clearPage() {
    loginForm.style.display = "none";
    signupForm.style.display = "none";
    logout.style.display = "none";
    allListings.style.display = "none";
    listingForm.style.display = "none";
    account.style.display = "none";
    listings_button.style.display = "none";
    users.style.display = "none";
  }

  static clearMain() {
    loginForm.style.display = "none";
    signupForm.style.display = "none";
    allListings.style.display = "none";
    listingForm.style.display = "none";
  }

  static showMainPage(user) {
    App.clearPage();
    const listingsClass = new Listings;
    const usersClass = new Users;

    //Hide Login + Signup Buttons
    login.style.display = "none";
    signup.style.display = "none";

    //Show Main Menu
    logout.style.display = "block";
    listings_button.style.display = "block";
    users.style.display = "block";
    account.style.display = "block";
    headerright.innerHTML += `<em> Welcome ${user.name}!</em>`;
    current_user_id = user.id;
  }
};
