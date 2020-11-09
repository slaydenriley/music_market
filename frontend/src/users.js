account.addEventListener("click", function showAccount() {
  hideListings();

  //hideUsers();
  fetch(`${BACKEND_URL}/users/${current_user_id}`)
  .then(user => user.json())
  .then(user => renderUser(user))
})

function renderUser(user) {
  singleUser.innerHTML += `<h1>${user.name}</h1> <h2>${user.username}</h2> <button class="edit-account">Edit Account</button>`
}
