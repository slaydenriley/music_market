class Users {
  constructor() {
    this.listeners()
  }

  listeners() {
    account.addEventListener("click", function showAccount() {
      renderUser()
    })

    users.addEventListener("click", function users() {
      renderUsers()
    })
  }
}

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
