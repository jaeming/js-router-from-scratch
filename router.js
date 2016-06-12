var routes = {
  root: 'page-1.html'
}

function initialize() {
  fetchContent(routes.root);
}

var links = document.querySelectorAll('[data-link]');
links.forEach(function(link) {
  link.addEventListener("click", linkTo, this)
});

function linkTo(link) {
  link.preventDefault();
  var linkAddress = link.target.dataset.link;
  fetchContent(linkAddress);
  history.pushState(linkAddress, linkAddress, linkAddress);
}

function render(body) {
  var outlet = document.getElementById('render');
  outlet.innerHTML = body;
}

function fetchContent(link) {
  fetch(link).then(function(response) {
    return response.text()
  }).then(function(text) {
    render(text);
  })
}

// Load History State
window.addEventListener('popstate', function(e) {
  if (e.state) {
    fetchContent(e.state);
  }
});

initialize();
