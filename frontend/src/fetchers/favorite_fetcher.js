class FavoriteFetcher {
  constructor() {
  }

  static create_favorites(id) {
    let formData = {
      user_id: current_user_id,
      listing_id: id
    };

     let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(formData)
        };
    fetch(`${BACKEND_URL}/favorites`, configObj)
    .then(fav => fav.json())
    .then(App.clearMain())
  }

  static find_favorites(id) {
    fetch(`${BACKEND_URL}/users/${id}`)
    .then(user => user.json())
    .then(user => Favorites.renderFavs(user.favorites))
  }

  static delete_favorites(id) {
    let formData = {
      listing_id: id
    }

    let configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };

    fetch(`${BACKEND_URL}/favorites/`, configObj)
    .then(resp => resp.json())
    .then(resp => App.clearMain())
  }
}
