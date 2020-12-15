class Favorites {
  constructor() {
    this.listeners()
  }

  listeners() {
    favorites.addEventListener("click", function() {
      App.clearMain()
      App.removeActiveButton()
      favorites.classList.add("active_button")
      Favorites.showFavs()
    })
  }

  static showFavs() {
    FavoriteFetcher.find_favorites(current_user_id)
  }

  static renderFavs(favs) {
    favs.forEach(fav => {
      let listing_id = fav.listing_id
      fetch(`${BACKEND_URL}/listings/${listing_id}`)
      .then(listing => listing.json())
      .then(listing => display(listing))
    })

    function display(listing) {
      allListings.style.display = "block"
      let newHtml = `<h4><em><a href="#" class="fav_button" id="${listing.id}">${listing.title}</a></em></h4>`
      allListings.innerHTML += newHtml
      addClick()
    }

    function addClick() {
      let listings = document.querySelectorAll(".fav_button")
      listings.forEach(listing => {
        listing.addEventListener("click", function() {
          ListingFetcher.fetchSingleListing(listing.id)
        })
      })
    }
  }
}
