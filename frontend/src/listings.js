class Listings {
  constructor() {
    this.listings = []
    this.fetchLoadListings()
    this.listeners()
  }

  listeners() {
    this.listings.addEventListener("click", this.fetchLoadListings.bind(this))
  }

  fetchLoadListings() {
    fetch(`${BACKEND_URL}/listings`)
    .then(list => list.json())
    .then(list => renderList(list))

    allListings.innerHTML += `<button class="new-listing-button">New Listing</button>`

    document.querySelector(".all-listings-cards").style.display = "block"
    list.forEach(listing => {
      allListings.innerHTML += `<div class="card"><h3>${listing.title}</h3> <h4>${listing.price}</h4></div>`
    })
  }
}
