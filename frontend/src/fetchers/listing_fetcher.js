class ListingFetcher {
  constructor() {
    this.fetchListings()
  }

  fetchListings() {
    fetch(`${BACKEND_URL}/listings`)
    .then(listings => listings.json())
    .then(listings => Listings.renderList(listings))
  }

  static post() {
    console.log("starting to post!")

    let userInputForTitle = document.querySelector("#listing_title").value;
    let userInputForPrice = document.querySelector("#listing_price").value;
    let userInputForDescription = document.querySelector("#listing_description").value;

    let formData = {
        title: userInputForTitle,
        price: userInputForPrice,
        description: userInputForDescription,
        user_id: current_user_id
      };

      let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(formData)
        };

      fetch(`${BACKEND_URL}/listings`, configObj)
      .then(listing => listing.json())
      .then(listing => Listings.renderSingleListing(listing))
  }
}
