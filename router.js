var routes = {
  root: 'page-1.html'
}

function initialize() {
  fetchContent(routes.root);
}

var links = document.querySelectorAll('[data-link]')
for (var i=0;i<links.length;i++) {
  this.addEventListener("click", linkTo, this);
}

function linkTo(link) {
  link.preventDefault();
  var linkAddress = link.target.dataset.link;
  fetchContent(linkAddress);
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

initialize();