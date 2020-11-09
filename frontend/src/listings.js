listings.addEventListener("click", function showListings() {
  allListings.innerHTML = ""

  fetch(`${BACKEND_URL}/listings`)
  .then(list => list.json())
  .then(list => renderList(list))

})

function renderList(list) {

  allListings.innerHTML += `<button class="new-listing-button">New Listing</button>`

  document.querySelector(".all-listings-cards").style.display = "block"
  list.forEach(listing => {
    allListings.innerHTML += `<div class="card"><h3>${listing.title}</h3> <h4>${listing.price}</h4></div>`
  })

}

//newListingButton.addEventListener("click", function showListingForm() {
//  console.log("clicked!")
//  Welcome();
//  listingForm.style.display = "block"
//})
