# js-router-from-scratch
This is an attempt to write my own basic Javascript Router.

Implemented:
- link-to helpers are Implemented through data attributes. Simply add `data-link="my-template.html"` to any your anchor elements and they will be intercepted and handled through the router.
- set root (default template) in router.js in the routes object, such as `var routes = {root: 'page-1.html'}`. later we will add all pages here once url redirect is implemented.


TODO:
- add push state history
- observe url and render equivalent template
