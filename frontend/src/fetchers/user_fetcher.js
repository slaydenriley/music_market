class UserFetcher {
  constructor() {
    this.fetchUsers()
  }

  fetchUsers() {
    fetch(`${BACKEND_URL}/users`)
    .then(users => users.json())
    .then(users => Users.renderUsers(users))
  }

  static fetchSingleUser(id) {
    fetch(`${BACKEND_URL}/users/${id}`)
    .then(user => user.json())
    .then(user => Users.renderSingleUser(user))
  }
}
