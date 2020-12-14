// USER INSTANCE CREATED WHEN LOGGED IN FROM APP CLASS //
class Users {
  constructor() {
    this.listeners();
  };

// LISTENS FOR BUTTON CLICKS //
  listeners() {
    users.addEventListener("click", function() {
      UserFetcher.fetchUsers()
      App.removeActiveButton()
      users.classList.add("active_button")
    });
    account.addEventListener("click", function() {
      UserFetcher.fetchSingleUser(current_user_id)
      App.removeActiveButton()
      account.classList.add("active_button")
    });
    edit_submit.addEventListener("click", function() {
      UserFetcher.editUser();
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

    // General HTML to be used for all user accounts //
    let newHtml = `
      <h2><em>${user.name}</em></h2>
      <p><em><a href="mailto: ${user.email}">Send email</a></em></p>
      <p>${user.description}</p>
      <h2><em>Listings:</em></h2>`

    // Adds an edit button to account if user is logged in //
    if (current_user_id === user.id) {
      singleUser.innerHTML += newHtml
      singleUser.innerHTML += `<button class="edit_account_button" id=${user.id}>Edit Account</button>`
      Users.editUserButton(user)
    }
    else {
      singleUser.innerHTML += newHtml
    };

    renderListings()

    // This function takes a user's listings and iterates through them //
    function renderListings() {
      user.listings.forEach(listing => {
        let html = `<h4><em><a href="#" class="user_listings" id=${listing.id}>${listing.title}</a></em></h4>`
        singleUser.innerHTML += html
      })

      let buttons = document.querySelectorAll(".user_listings")
      buttons.forEach(button => {
        button.addEventListener("click", function() {
          ListingFetcher.fetchSingleListing(button.id)
        })
      })
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


  static editUserButton(user) {
    let button = document.querySelector(".edit_account_button")

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
  };
};
