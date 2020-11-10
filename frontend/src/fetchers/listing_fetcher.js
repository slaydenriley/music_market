class ListingFetcher {
  constructor() {
    this.fetchListings()
  }

  fetchListings() {
    fetch(`${BACKEND_URL}/listings`)
    .then(list => list.json())
    .then(list => Listings.renderList(list))
  }
}