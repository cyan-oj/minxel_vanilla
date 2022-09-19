// should create a canvas based on user input. default to 500x500 
// add html element to page with id that other functions can reference

// const CanvasUtil = {
//   // makeCanvas(canvasProps) {
//   //   let canvas = document.createElement('canvas')
//   //   canvas.height = canvasProps.height;
//   //   canvas.width = canvasProps.width;
//   //   context.fillStyle = this.fill;
//   //   context.fillRect(0, 0, this.width, this.height);
//   //   return canvas
//   // },

//     //enlight mousedraw
//     // sets position based on the event passed in
//   setPosition(e) {
//     pos.x = e.clientX;
//     pos.y = e.clientY;
//   },

//   draw(e) {
//     if (e.buttons !== 1) return; // exits early if mouse is not pressed
//     let color = document.getElementById("hexinput").value;

//     context.beginPath();
//     context.lineWidth = 20;
//     context.lineCap = "round";
//     context.strokeStyle = color;
//     context.moveTo(pos.x, pos.y); // line start position
//     setPosition(e);
//     context.lineTo(pos.x, pos.y); // line end position
//     context.stroke(); 
//   }
// }

// module.exports = CanvasUtil;