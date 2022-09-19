// palette class, holds a name, a list of colors and their postitions, and someday metadata about the user who created it
class Palette {
  constructor(name = "untitled", colors = []) {
    this.name = name;
    this.colors = colors;
    this.size = colors.length;
    this.activeColor = this.colors[0];
  }


  // color options - rgba value, desired color position from 0-15
  
  addColor(color) {
    console.log("from Palette adding color")
    if (this.colors.length < 15 ) {
      this.colors.push(color);
    }
  };   

  setActiveColor(color) {
    console.log("from Palette changing color")
    this.activeColor = color;
  };
}

module.exports = Palette;