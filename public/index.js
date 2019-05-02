document.getElementById("search").addEventListener("keyup", function(event) {
  event.preventDefault();

  fetch("/search")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    var node = document.createTextNode("Click Here");
    news.appendChild(node);
  })
  .catch(function(error) {
    console.log(error);
  });
});
