// LISTING FETCHER COMMUNICATES WITH RAILS API FOR LISTINGS //
class ListingFetcher {
  constructor() {
    this.fetchListings()
  };


// FETCHES ALL LISTINGS //
  fetchListings() {
    fetch(`${BACKEND_URL}/listings`)
    .then(listings => listings.json())
    .then(listings => Listings.renderList(listings))
  };

// FETCHES SINGLE LISTING //
  static fetchSingleListing(id) {
    fetch(`${BACKEND_URL}/listings/${id}`)
    .then(listing => listing.json())
    .then(listing => Listings.renderSingleListing(listing))
  };

// NEW LISTING POST REQUEST //
  static post() {
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
  };
};
