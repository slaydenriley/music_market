// LISTING INSTANCE CREATED WHEN LOGGED IN FROM APP CLASS //
class Listings {
  constructor() {
    this.listeners();
  };

// LISTENS FOR BUTTON CLICKS //
  listeners() {
    listings_button.addEventListener("click", function() {
      App.removeActiveButton()
      let fetchListings = new ListingFetcher
      listings_button.classList.add("active_button")
    });
    new_listing_button.addEventListener("click", function() {
      App.removeActiveButton()
      Listings.renderListingForm();
      new_listing_button.classList.add("active_button")
    });
    newListingSubmit.addEventListener("click", function() {
      let postListing = ListingFetcher.post();
    });
    button_submit.addEventListener("click", function() {
      let editListing = ListingFetcher.editListing();
    });
  };

// RENDERS ALL LISTINGS //
  static renderList(list) {
    App.clearMain();
    allListings.style.display = "block";
    let newHtml;
    let newFav;

    // Creates Listing Cards //
    list.forEach(listing => {
      // This adds the favorite add or remove buttons //
      if (listing.favorites.length !== 0) {
        listing.favorites.forEach(fav => {
          let userid = parseInt(fav.user_id)
          if (userid === current_user_id) {
            newFav = `<em><a href="#" id="${listing.id}" class="remove_favorite_listing">Remove Favorite</a></em>`
          }
          else {
            newFav = `<em><a href="#" id="${listing.id}" class="favorite_listing">Favorite this listing!</a></em>`
          }
        })
      }
      else {
        newFav = `<em><a href="#" id="${listing.id}" class="favorite_listing">Favorite this listing!</a></em>`
      }

      if (listing.image_link !== null || listing.image_link !== "") {
        newHtml = `
          <button class="card" id="${listing.id}">
          ${newFav}
          <h2><em>${listing.title}</em></h2>
          <img class="thumbnail" src="${listing.image_link}">
          <p>Price: ${listing.price}</p>
          <p id="button_link"><em>Learn More...</em></p></button>`

          allListings.innerHTML += newHtml;
      }
      else {
      newHtml = `
        <button class="card" id="${listing.id}">
        <h2><em>${listing.title}</em></h2>
        <p>Price: ${listing.price}</p>
        <p id="button_link"><em>Learn More...</em></p></button>` + newFav

        allListings.innerHTML += newHtml;
      }

    });

    Listings.cardButtons();
    Listings.favoriteButtons();
  };

// RENDERS THE NEW LISTING FORM AND ENSURES IT'S BLANK //
  static renderListingForm() {
    App.clearMain();
    clearForm();
    listingForm.style.display = "block";

    function clearForm() {
      let title = document.querySelector("#listing_title");
      let price = document.querySelector("#listing_price");
      let description = document.querySelector("#listing_description");

      title.value = "";
      price.value = "";
      description.value = "";
    };
  };

  static renderSingleListing(listing) {
    App.clearMain();
    App.removeActiveButton();
    listings_button.classList.add("active_button");

    let newHtml = `
      <h2><em>${listing.title}</em></h2>
      <h4>Price: ${listing.price}</h4>
      <h3>Description:</h3> <p>${listing.description}</p></div>
      <p><em><a href="mailto:${listing.user.email}">Message ${listing.user.name}</a></em></p>
      <a href="${listing.image_link}" target="_blank"><img src="${listing.image_link}"></a><br/>`

    if (current_user_id === listing.user_id) {
      newHtml += `
        <button class="edit-listing" id="${listing.id}">Edit Listing</button>
        <button class="delete-listing" id="${listing.id}">Delete Listing</button>`
    }

    singleListing.style.display = "block";
    singleListing.innerHTML += newHtml;

    if (current_user_id === listing.user_id) {
      Listings.editButton(listing);
      Listings.deleteButton(listing.id);
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

  static favoriteButtons() {
    let buttons = document.querySelectorAll(".favorite_listing")
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        FavoriteFetcher.create_favorites(button.id)
      })
    })

    let delete_fav = document.querySelectorAll(".remove_favorite_listing")
    delete_fav.forEach(del => {
      del.addEventListener("click", function() {
        FavoriteFetcher.delete_favorites(del.id)
      })
    })
  }

// ADDS EVENT LISTERS TO LISTING EDIT AND DELETE BUTTONS //
  static editButton(listing) {
    let button = document.querySelector(".edit-listing")

    button.addEventListener("click", function() {
      let title = document.querySelector("#edit_listing_title");
      let price = document.querySelector("#edit_listing_price");
      let description = document.querySelector("#edit_listing_description");
      let id = document.querySelector("#listing_id");
      let link = document.querySelector("#edit_image_upload")

      title.value = `${listing.title}`;
      price.value = `${listing.price}`;
      description.value = `${listing.description}`;
      id.value = `${listing.id}`;
      link.value = `${listing.image_link}`

      App.clearMain();
      editListingForm.style.display = "block";
    });
  };

  static deleteButton() {
    let button = document.querySelector(".delete-listing");
    button.addEventListener("click", function() {
      if (confirm("Are you sure you want to delete this listing?")) {
        ListingFetcher.deleteListing(`${button.id}`);
        App.removeActiveButton();
      };
    });
  };
};
