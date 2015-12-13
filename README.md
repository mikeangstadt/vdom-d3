# vdom-d3
This is a node.js plugin library of VDOM helpers for the d3 visualization library.

## What It Puts Together
vdom-d3 uses:
Bostock's d3 plugin: https://github.com/mbostock/d3.git
Esch's virtual-dom plugin: https://github.com/Matt-Esch/virtual-dom

## Getting Started
Point to the latest version in your package.json


## Using vdom-d3

```
var VdomD3 = require('vdom-d3');

_options = {
  
};

var vdom_d3 = VdomD3(_options);

vdom_d3.data = [{"name":"dogs", "value":5}, {"name":"cats", "value":0},{"name":"birds", "value":2},{"name":"fish", "value":3}];


