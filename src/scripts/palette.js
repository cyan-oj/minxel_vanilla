// palette class, holds a name, a list of colors and their postitions, and someday metadata about the user who created it
class Palette {
  constructor(properties) {
    this.name = properties.name;
    this.colors = properties.colors;
    this.activeColor = this.colors[0];
  }


  // color options - hsl value
  
  addColor(color) {
    console.log("from Palette adding color")
    if (this.colors.length < 15 ) {
      this.colors.push(color);
    }
  } 

  setActiveColor(color) {
    console.log("from Palette changing color")
    this.activeColor = color;
  }

  get size() {
    return this.colors.length;
  }
}

module.exports = Palette;