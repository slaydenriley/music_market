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
    .then(fav => console.log(fav))
  }

  static find_favorites() {

  }

  static delete_favorites() {

  }
}
