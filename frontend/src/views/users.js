// USER INSTANCE CREATED WHEN LOGGED IN FROM APP CLASS //
class Users {
  constructor() {
    this.listeners();
  };

// LISTENS FOR BUTTON CLICKS //
  listeners() {
    users.addEventListener("click", function() {
      let user = new UserFetcher
      App.removeActiveButton()
      users.classList.add("active_button")
    });
    account.addEventListener("click", function() {
      UserFetcher.fetchSingleUser(current_user_id)
      App.removeActiveButton()
      account.classList.add("active_button")
    });
  };

// RENDERS ALL USERS //
  static renderUsers(users) {
    App.clearMain();
    allUsers.style.display = "block";

    users.forEach(user => {
      let newHtml = `
        <button class="user_card" id="${user.id}">
        <h2><em>${user.name}</em></h2>
        <p><em>Listings: ${user.listings.length}</em></p>
        <p><em><a href="mailto:${user.email}">Send Email</a></em></p></button>`;

      allUsers.innerHTML += newHtml
    });

    Users.userCards();
  };

// RENDERS SINGLE USER //
  static renderSingleUser(user) {
    App.clearMain();
    singleUser.style.display = "block";

    // This function takes a user's listings and iterates through them //
    function renderListings() {
      let listings = user.listings
      listings.forEach(listing => {
        let html = `<h2><em>Listings:</em></h2> <p><a href="#" class="user_listings" id=${listing.id}>${listing.title}</a></p>`
        singleUser.innerHTML += html
      });
      Users.userListingsAccount()
    };

    // General HTML to be used for all user accounts //
    let newHtml = `
      <h2><em>${user.name}</em></h2>
      <p><em><a href="mailto: ${user.email}">Send email</a></em></p>
      <p><em>Username: ${user.username}</em></p>`

    // Adds an edit button to account if user is logged in //
    if (current_user_id === user.id) {
      singleUser.innerHTML += newHtml + `<button class="edit_account_button" id=${user.id}>Edit Account</button>`
      renderListings()
      Users.editUserButton(user)
    }
    else {
      singleUser.innerHTML += newHtml
      renderListings()
    };
  };

// MAKES USER ACCOUNTS CLICKABLE //
  static userCards() {
    let card = document.querySelectorAll(".user_card")
    card.forEach(button => {
      button.addEventListener("click", function() {
        UserFetcher.fetchSingleUser(`${button.id}`);
      });
    });
  };

  static userListingsAccount() {
    let listings = document.querySelectorAll(".user_listings")
    listings.forEach(listing => {
      listing.addEventListener("click", function () {
        ListingFetcher.fetchSingleListing(`${listing.id}`)
        App.removeActiveButton()
        listings_button.classList.add("active_button")
      })
    })
  }

  static editUserButton(user) {
    let button = document.querySelector(".edit_account_button")
    //let button_submit = document.querySelector(".edit_listing_submit")

    button.addEventListener("click", function() {
      let name = document.querySelector("#edit_name");
      let username = document.querySelector("#edit_username");
      let description = document.querySelector("#edit_description");
      let email = document.querySelector("#edit_email")
      let password = document.querySelector("#edit_password")
      let password_confirmation = document.querySelector("#edit_password_confirm")

      name.value = `${user.name}`;
      username.value = `${user.username}`;
      description.value = `${user.description}`;
      email.value = `${user.email}`;

      App.clearMain();
      userEditForm.style.display = "block";
    });

    edit_submit.addEventListener("click", function() {
      let editUser = UserFetcher.editUser(`${user.id}`);
    });
  };
};
