class Listings {
  constructor() {
    this.listings = [];
    this.listeners();
  };

  listeners() {
    listings_button.addEventListener("click", function() {
      let fetchListings = new ListingFetcher
    });

    new_listing_button.addEventListener("click", function() {
      Listings.renderListingForm();
      active_button = "new_listing_button"
    });

    newListingSubmit.addEventListener("click", function() {
      let postListing = ListingFetcher.post();
    });
  };

  static renderList(list) {
    App.clearMain();
    allListings.style.display = "block";

    list.forEach(listing => {
      allListings.innerHTML += `<button class="card" id="${listing.id}">
                                <h3>${listing.title}</h3> <h4>${listing.price}</h4>
                                <p>${listing.description}</p></button>`;
    });

    Listings.cardButtons()
  };

  static renderListingForm() {
    App.clearMain();
    listingForm.style.display = "block";
  };

  static renderSingleListing(listing) {
    App.clearMain()
    singleListing.style.display = "block";
    singleListing.innerHTML += `<h3>${listing.title}</h3> <h4>${listing.price}</h4>
                                <p>${listing.description}</p></div>`;
  };

  static cardButtons() {
    let card = document.querySelectorAll(".card")
    card.forEach(button => {
      button.addEventListener("click", function() {
        ListingFetcher.fetchSingleListing(`${button.id}`);
      });
    });
  };
};
