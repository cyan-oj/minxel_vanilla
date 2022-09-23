// should create a canvas based on user input. default to 500x500 
// add html element to page with id that other functions can reference

class Layer {
  constructor (name, width, height) {
    const baseCanvas = createCanvas(width, height);
    baseCanvas.id = "base"
    const context = baseCanvas.getContext("2d");
    docBody[0].appendChild(baseCanvas);
    const paletteBox = document.getElementById("palettebox");
  }
}