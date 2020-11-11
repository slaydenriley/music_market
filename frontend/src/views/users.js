// USER INSTANCE CREATED WHEN LOGGED IN FROM APP CLASS //
class Users {
  constructor() {
    this.listeners()
  }

// LISTENS FOR BUTTON CLICKS //
  listeners() {
    users.addEventListener("click", function() {
      let users = new UserFetcher
    })

    account.addEventListener("click", function() {
      UserFetcher.fetchSingleUser(current_user_id)
    })
  }

// RENDERS ALL USERS //
  static renderUsers(users) {
    App.clearMain();
    allUsers.style.display = "block";

    users.forEach(user => {
      let newHtml = `
        <button class="user_card" id="${user.id}">
        <h4>${user.name}</h4>
        <p>${user.username}</p>
        <p>${user.email}</p></button>`;

      allUsers.innerHTML += newHtml
    });

    Users.userCards()
  };

// RENDERS SINGLE USER //
  static renderSingleUser(user) {
    App.clearMain()
    singleUser.style.display = "block";
    let newHtml = `
      <h3>${user.name}</h3>
      <h4>${user.username}</h4>
      <p>${user.email}</p>`

    // Adds an edit button to account if user is logged in //
    if (current_user_id === user.id) {
      singleUser.innerHTML += newHtml + `<button class="edit_account_button" id=${user.id}>Edit Account</button>`
    }
    else {
      singleUser.innerHTML += newHtml
    };

    if (current_user_id === user.id) {
      Users.editUserButton(user);
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
    //let button_submit = document.querySelector(".edit_listing_submit")

    button.addEventListener("click", function() {
      let name = document.querySelector("#edit_name");
      let username = document.querySelector("#edit_username");
      let description = document.querySelector("#edit_description");
      let email = document.querySelector("#edit_email")
      let password = document.querySelector("#edit_password")
      let password_confirmation = document.querySelector("#edit_password_confirm")
      //let id = document.querySelector("#user_id");

      name.value = `${user.name}`;
      username.value = `${user.username}`;
      description.value = `${user.description}`;
      email.value = `${user.email}`;

      App.clearMain();
      userEditForm.style.display = "block";
    });

    edit_submit.addEventListener("click", function() {
      let editListing = ListingFetcher.editListing(`${button.id}`);
    });
  };
};
