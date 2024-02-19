const $gifArea = $("#gif");
const $searchInput = $("#search");

/* adding gif with ajax
*/

function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "w-100"
    });
    $newCol.append($newGif);
    $gifArea.append($newCol);
  }
}

/* form submission */

$("form").on("submit", async function(evt) {
  evt.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "H53Z7ZSNWqtMhztGsYy5kX4FlFcoBfGv"
    }
  });
  addGif(response.data);
});

/* deleteing the gif */

$("#remove").on("click", function() {
  $gifArea.empty();
});