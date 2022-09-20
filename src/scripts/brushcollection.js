const Brush = require("./brush.js");

class BrushCollection {
  constructor(name = "untitled", brushes = []) {
    this.name = name;
    this.brushes = brushes;
  }

  addBrush(properties) {
    if (this.brushes.length < 64) {
      this.brushes.unshift(new Brush(properties));
    }
  }  
}

module.exports = BrushCollection;