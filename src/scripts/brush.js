// brush creator and driver 
// keep draw function here for now?

// draw function pressure events should only temporarily modify brushes, it should not change the brushes' properties
class Brush {
  constructor(properties) {
    this.size = properties.size;
  }

  // get brushTile() {
  //   const svg = document.createElement("svg");
  //   const svgns = "http://www.w3.org/2000/svg";

  //   const lineProps = {
  //     x1: "0",
  //     y1: "0",
  //     x2: "15",
  //     x2: "15",
  //     style: `stroke:${this.color};stroke-width${this.size}`
  //   }

  //   const newLine = document.createElementNS(svgns, "line");
    
  //   Object.assign(newLine, lineProps);

  //   svg.appendChild(newLine);

  //   return svg;
  // }
}

module.exports = Brush;