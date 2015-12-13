# vdom-d3
This is a node.js plugin library of VDOM helpers for the d3 visualization library.

THIS IS NOT YOUR SERVER-SIDE D3 PROCESSING!  The whole point of progressive rendering is that you DON'T manipulate the DOM - you update the view model on the server and pass an updated state to the DOM renderer.  

Any d3 math you want to do to scale, massage the data set, whatever - should be done on the server and be available on the state available within the context of your VDOM.

## What It Puts Together
vdom-d3 uses:
Bostock's d3 plugin: https://github.com/mbostock/d3.git
Esch's virtual-dom plugin: https://github.com/Matt-Esch/virtual-dom

## Getting Started
Point to the latest version in your package.json

## Options
The vdom-d3 construction accepts an options objcet as it's first param, here are the options currently available.

```
{
  x:  int | function(d,i){},
  y:  int | function(d,i){},
  height: int | function(d,i){},
  width: int | function(d,i){} //optional for rectangles
  type: "circle" | "rect", 
  color: int | function(d,i){}
}
```

## Using vdom-d3

```
var VdomD3 = require('vdom-d3');
var h = require('virtual-dom/h');

var view_model = {
  pets:[{"name":"dogs", "value":5}, {"name":"cats", "value":0},{"name":"birds", "value":2},{"name":"fish", "value":3}]
};

_options = {
  x: function(d,i){
    return i * 10;
  },
  y: function(d,i){
    return 100 / (i+1);
  },
  label_path: "name", //these can be more complex -- start at each element in list provided.
  value_path: "value"
  type: "circle"
};

var vdom_d3 = VdomD3(view_model.pets);  //initialized with view_model data.

h("section", [
  h("h1", "Our Awesome Pets"),
  vdom_d3.h(_options), //renders an svg which based on options and data.
]);
```
