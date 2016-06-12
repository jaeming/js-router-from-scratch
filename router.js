var routes = {
  root:  {title: 'Home',              url: '/home'},
  topics: {title: 'Posts and Things', url: '/topics'},
  etc:   {title: 'Etcetera',          url: '/etc'},
}

function initialize() {
  fetchContent(routes.root.url);
}

var links = document.querySelectorAll('[data-link]');
links.forEach(function(link) {
  link.addEventListener("click", linkTo, false)
});

function linkTo(evt) {
  evt.preventDefault();
  var link = evt.target.dataset.link;
  var url = routes[link].url;
  var title = routes[link].title;
  fetchContent(url);
  history.pushState(url, title, url);
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
