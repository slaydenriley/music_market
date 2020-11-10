// LISTING CLASS CALLED WHEN LOGGED IN FROM APP CLASS //
class Listings {
  constructor() {
    this.listeners();
  };

// LISTENS FOR BUTTON CLICKS //
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
    let newHtml;
    if (current_user_id === listing.user_id) {
      newHtml = `
        <h3>${listing.title}</h3>
        <h4>${listing.price}</h4>
        <p>${listing.description}</p></div>
        <button class="edit-listing" id="${listing.id}">Edit Listing</button>
        <button class="delete-listing" id="${listing.id}">Delete Listing</button>`
    }
    else {
      newHtml = `
        <h3>${listing.title}</h3>
        <h4>${listing.price}</h4>
        <p>${listing.description}</p></div>`
    }

    singleListing.style.display = "block";
    singleListing.innerHTML += newHtml;

    if (current_user_id === listing.user_id) {
      Listings.editButton(listing);
      Listings.deleteButton();
    };
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

// ADDS EVENT LISTERS TO LISTING EDIT AND DELETE BUTTONS //
  static editButton(listing) {
    let button = document.querySelector(".edit-listing")

    button.addEventListener("click", function() {
      let title = document.querySelector("#edit_listing_title");
      let price = document.querySelector("#edit_listing_price");
      let description = document.querySelector("#edit_listing_description");

      title.value = `${listing.title}`
      price.value = `${listing.price}`
      description.value = `${listing.description}`

      App.clearMain();
      editListingForm.style.display = "block"

      ListingFetcher.editListing(`${button.id}`)

    })
  }

  static deleteButton() {
    let button = document.querySelector(".delete-listing")
    button.addEventListener("click", function() {
      ListingFetcher.deleteListing(`${button.id}`)
    })
  }
};
