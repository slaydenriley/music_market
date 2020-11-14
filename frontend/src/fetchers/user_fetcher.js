// // USER FETCHER COMMUNICATES WITH RAILS API FOR USES //
class UserFetcher {
  constructor() {
    this.fetchUsers();
  };

  fetchUsers() {
    fetch(`${BACKEND_URL}/users`)
    .then(users => users.json())
    .then(users => Users.renderUsers(users))
  };

  static fetchSingleUser(id) {
    fetch(`${BACKEND_URL}/users/${id}`)
    .then(user => user.json())
    .then(user => Users.renderSingleUser(user))
  };

// PATCH REQUEST TO EDIT USER //
static editUser() {
  let name = document.querySelector("#edit_name").value;
  let username = document.querySelector("#edit_username").value;
  let description = document.querySelector("#edit_description").value;
  let email = document.querySelector("#edit_email").value;
  let password = document.querySelector("#edit_password").value;
  let password_confirmation = document.querySelector("#edit_password_confirm").value;
  let id = current_user_id

  let formData = {
    name: name,
    username: username,
    email: email,
    description: description,
    password: password,
    password_confirmation: password_confirmation,
    id: id
  };

  let configObj = {
     method: "PATCH",
     headers: {
         "Content-Type": "application/json",
         "Accept": "application/json"
       },
       body: JSON.stringify(formData)
    };

    fetch(`${BACKEND_URL}/users`, configObj)
    .then(user => user.json())
    .then(function(user) {
      if (user.status === 400) {
        let error_message = document.querySelector(".edit_user_error_message")
        error_message.innerHTML = ""
        error_message.innerHTML += `<p class="error_message">${user.error}</p>`
        loginForm.style.display = "block"
      }
      else {
        Users.renderSingleUser(user)
      };
    });

};
};
