const { createCanvas } = require('canvas');

class WorkSpace {
  constructor (options) {
    const baseCanvas = createCanvas(options.width, options.width);
    baseCanvas.id = "base"
    const context = baseCanvas.getContext("2d");
    docBody[0].appendChild(baseCanvas);
    const paletteBox = document.getElementById("palettebox");
  }
}

module.exports = WorkSpace;