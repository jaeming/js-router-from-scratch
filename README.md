# js-router-from-scratch
This my rudimentary attempt to write my own basic Javascript Router.

Set your root in router.js in the routes object, along with your other routes:

```
var routes = {
  root:   {title: 'Home',              url: '/home'},
  topics: {title: 'Posts and Things',  url: '/topics'},
  etc:    {title: 'Etcetera',          url: '/etc'},
}
```

- Link-to helpers are Implemented through data attributes. Simply add `data-link="route-name"` to any your anchor elements and they will be intercepted and handled through the router.

- History API (pushState) has now been implemented, meaning forward and backward browser navigation will work.

- A working example is included in the files.

TODO:
- observe url and render equivalent template
- change page title (pushState ignores this param)
