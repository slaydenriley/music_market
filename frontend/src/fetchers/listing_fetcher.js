class ListingFetcher {
  constructor() {
    this.fetchListings()
  }

  fetchListings() {
    fetch(`${BACKEND_URL}/listings`)
    .then(list => list.json())
    .then(list => Listings.renderList(list))
  }

  static post() {
    console.log("starting to post!")

    let userInputForTitle = document.querySelector("#title").value;
    let userInputForPrice = document.querySelector("#price").value;
    let userInputForDescription = document.querySelector("#description").value;

    let formData = {
        title: userInputForTitle,
        price: userInputForPrice,
        description: userInputForPasswordConfirmation
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
      .then(listing => console.log(listing))
  }
}
