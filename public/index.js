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

var searchIndex = ["404 Error","AMAR","Abadines","Abdo","Adams","Aimone","Abrams","Acklin","Adamo","Albert","Bagnato","Baker","Balcom","Balmer","Bach","Bagi","Bainer","Banu","Cabral","Calcot","Chan","Chaplin","Charter","Cheba"];
var input = document.getElementById("search"),
    ul = document.getElementById("searchResults"),
    inputTerms, termsArray, prefix, terms, results, sortedResults;

var search = function() {
  inputTerms = input.value.toUpperCase();
  results = [];
  termsArray = inputTerms.split(' ');
  prefix = termsArray.length === 1 ? '' : termsArray.slice(0, -1).join(' ') + ' ';
  terms = termsArray[termsArray.length -1].toUpperCase();

  for (var i = 0; i < searchIndex.length; i++) {
    var a = searchIndex[i].toUpperCase(),
        t = a.indexOf(terms);

    if (t > -1) {
      results.push(a);
    }
  }
  evaluateResults();
};

var evaluateResults = function() {
  if (results.length > 0 && inputTerms.length > 0 && terms.length !== 0) {
    sortedResults = results.sort(sortResults);
    appendResults();
  }
  else if (inputTerms.length > 0 && terms.length !== 0) {
    ul.innerHTML = '<li>NOT FOUND! <strong>';
      // + '</strong> is not in the index. <br><small><a href="https://google.com/search?q='
      // + encodeURIComponent(inputTerms) + '">Try Google?</a></small></li>';

  }
  else if (inputTerms.length !== 0 && terms.length === 0) {
    return;
  }
  else {
    clearResults();
  }
};

var sortResults = function (a,b) {
  if (a.indexOf(terms) < b.indexOf(terms)) return -1;
  if (a.indexOf(terms) > b.indexOf(terms)) return 1;
  return 0;
}

var appendResults = function () {
  clearResults();

  for (var i=0; i < sortedResults.length && i < 5; i++) {
    var li = document.createElement("li"),
        result = prefix
          + sortedResults[i].toUpperCase().replace(terms, '<strong>'
          + terms
          +'</strong>');

    li.innerHTML = result;
    ul.appendChild(li);
  }

  if ( ul.className !== "term-list") {
    ul.className = "term-list";
  }
};

var clearResults = function() {
  ul.className = "term-list hidden";
  ul.innerHTML = '';
};

input.addEventListener("keyup", search, false);
