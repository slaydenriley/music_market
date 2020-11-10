class Users {
  constructor() {
    this.listeners()
  }

  listeners() {
    users.addEventListener("click", function() {
      let users = new UserFetcher
    })

    account.addEventListener("click", function() {
      UserFetcher.fetchSingleUser(current_user_id)
    })
  }

  static renderUsers(users) {
    App.clearMain();
    allUsers.style.display = "block";

    users.forEach(user => {
      let newHtml = `
        <button class="card" id="${user.id}">
        <h4>${user.name}</h4>
        <p>${user.username}</p></button>`;

      allUsers.innerHTML += newHtml
    });
  };

  static renderSingleUser(user) {
    App.clearMain()
    singleUser.style.display = "block";
    singleUser.innerHTML += `<h3>${user.name}</h3> <h4>${user.username}</h4>`;
  };
};

/*
function renderUser(user) {
  App.clearMain()
  fetch(`${BACKEND_URL}/users/${current_user_id}`)
  .then(user => user.json())
  .then(user => showUser(user))
}

function showUser(user) {
  App.clearMain()
  singleUser.innerHTML = `<h1>${user.name}</h1> <h2>${user.username}</h2> <button class="edit-account">Edit Account</button>`
}

function renderUsers(user) {
  App.clearMain()
  fetch(`${BACKEND_URL}/users/`)
  .then(users => users.json())
  .then(users => showUsers(users))
}

function showUsers(users) {
  App.clearMain()
  users.forEach(user => {
    allUsers.innerHTML = `<h1>${user.name}</h1> <h2>${user.username}</h2> <button class="edit-account">Edit Account</button>`
  })
}
*/
