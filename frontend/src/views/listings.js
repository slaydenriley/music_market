class Listings {
  constructor() {
    this.listings = [];
    this.listeners();
  };

  listeners() {
    listings_button.addEventListener("click", function() {
      let fetchListings = new ListingFetcher;
    });
    new_listing_button.addEventListener("click", function() {
      Listings.renderListingForm();
    });
    newListingSubmit.addEventListener("click", function() {
      console.log("clicked")
    });
  };

  static renderList(list) {
    document.querySelector(".all-listings-cards").style.display = "block";

    list.forEach(listing => {
      allListings.innerHTML += `<div class="card"><h3>${listing.title}</h3> <h4>${listing.price}</h4></div>`;
    });
  };

  static renderListingForm() {
    listingForm.style.display = "block";
  };
};
