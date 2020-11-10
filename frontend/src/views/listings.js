// LISTING CLASS CALLED WHEN LOGGED IN FROM APP CLASS //
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
    });
    newListingSubmit.addEventListener("click", function() {
      let postListing = ListingFetcher.post();
    });
  };

// RENDERS ALL LISTINGS //
  static renderList(list) {
    App.clearMain();
    allListings.style.display = "block";

    list.forEach(listing => {
      let newHtml = `
        <button class="card" id="${listing.id}">
        <h3>${listing.title}</h3> <h4>${listing.price}</h4>
        <p>${listing.description}</p></button>`;

      allListings.innerHTML += newHtml
    });

    Listings.cardButtons()
  };

// RENDERS THE NEW LISTING FORM //
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

// ADDS EVENT LISTENER TO ALL LISTING CARDS SO THEY CAN BE CLICKED //
  static cardButtons() {
    let card = document.querySelectorAll(".card")
    card.forEach(button => {
      button.addEventListener("click", function() {
        ListingFetcher.fetchSingleListing(`${button.id}`);
      });
    });
  };
};
