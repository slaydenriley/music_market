class Listings {
  constructor() {
    this.listings = []
    this.listeners()
  }
  newListingButton = document.getElementById("new-listing-button");

  listeners() {
    listings_button.addEventListener("click", function() {
      clearMain()
      let fetchListings = new ListingFetcher
    })
    newListingButton.addEventListener("click", function() {
      console.log("I was clicked!")
    })
  }

  static renderList(list) {
    document.querySelector(".all-listings-cards").style.display = "block";

    list.forEach(listing => {
      allListings.innerHTML += `<div class="card"><h3>${listing.title}</h3> <h4>${listing.price}</h4></div>`
    })
  }
}
