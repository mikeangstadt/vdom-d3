var d3 = require('d3');
var h = require('virtual-dom/h');
var _ = require('lodash');

module.exports = {
  init: function(options, data){
    var  self = this;
    
    var defaults = {
      height: 4,
      width: 2,
      left: 0,
      top: 0
    };
    
    var options = _.assign({}, defaults, options);
    
    self = _.assign(self, options);
  
    var svg = d3.select("svg");
    
    self.g = svg.append(g).attr("transform", "translate(",options.left,",",options.top,")");
    
    self[self.type] = g.selectAll(self.type).data(data);
  },
  h: function(){
    var self = this;
    if(self[self.type]){
      var block = self[self.type];
      block.enter().append(self.type);
      var attrs = {};
      
      attrs.height = self.height;
      attrs.width = self.width; 
      
      if(self.x){
        self.type == "circle" ? attrs.cx = x : attrs.x = x;
      }
      
      if(self.y){
        self.type == "circle" ? attrs.cy = y : attrs.y = y;
      }
      
      return h(block.attr(attrs));
      
    }
  }
}
