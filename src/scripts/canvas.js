// should create a canvas based on user input. default to 500x500 
// add html element to page with id that other functions can reference
class Canvas {
  constructor (canvasProps, parent) {
    this.name = canvasProps.name
    this.width = canvasProps.width;
    this.height = canvasProps.height;
    this.fill = canvasProps.fill;
  }
}