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

// EDIT LISTING //
  static editListing() {
    let title = document.querySelector("#edit_listing_title").value;
    let price = document.querySelector("#edit_listing_price").value;
    let description = document.querySelector("#edit_listing_description").value;
    let id = document.querySelector("#listing_id").value;

    let formData = {
      title: title,
      price: price,
      description: description,
      user_id: current_user_id,
      id: id,
    };

    let configObj = {
       method: "PATCH",
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

// DELETE LISTING //
  static deleteListing(id) {
    let formData = {
      id: id
    }

    let configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };

    fetch(`${BACKEND_URL}/listings/`, configObj)
    .then(resp => resp.json())
    .then(resp => App.clearMain())
  };
};
