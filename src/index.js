//const CanvasUtil = require("./scripts/canvas.js");
const docBody = document.getElementsByTagName("body");
const WorkSpace = require('./scripts/workspace');
const Palette = require("./scripts/palette.js");
const fs = require("fs");

document.addEventListener("DOMContentLoaded", function () {
  // const canvas = document.getElementById("canvas");
  // canvas.width = 800;
  // canvas.height = 800;
  // const context = canvas.getContext("2d");
  const paletteBox = document.getElementById("palettebox");

  const testColors = [
    "red",
    "black",
    "white",
    "green"
  ];
  
  const currentPalette = new Palette("test", testColors);
  
  function loadPalette() {
    colors = currentPalette.colors;
    if (colors.length > 0) {
      for (let i = 0; i < colors.length; i ++) {
        let button = document.createElement("button");
        button.className = "swatch";
        button.id = `swatch${i + 1}`;
        button.color = colors[i];
        button.style.backgroundColor = colors[i]
        paletteBox.appendChild(button);
      }
    }
  }  

  loadPalette(currentPalette);

  paletteBox.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("changing colors")
    currentPalette.setActiveColor(e.target.color);
    console.log(currentPalette.activeColor);
  });

  const buttonMap = {
    tip: 0x1, // 
    barrel: 0x2,
    middle: 0x4,
    eraser: 0x20,
  };

  let options = {
    width: 800,
    height: 800,
    palette: currentPalette,
    parent: docBody[0]
  }

  const workSpace = new WorkSpace(options); 

  // document.addEventListener("mousemove", workSpace.draw);
  // document.addEventListener("mousedown", workSpace.setPosition);
  // document.addEventListener("mouseenter", workSpace.setPosition);
    
  // const baseCanvas = createCanvas(800, 800);
  // baseCanvas.id = "can1"
  // console.log("outside saveFile");
  // console.log(baseCanvas);
  // const context = baseCanvas.getContext("2d");
  // docBody[0].appendChild(baseCanvas);
  // const paletteBox = document.getElementById("palettebox");
  
  // function saveFile(canvasID) { // need to bind to context?
  //   const canvas = document.getElementById(canvasID)
  //   console.log("inside saveFile")
  //   console.log(canvas);
  //   const buffer = canvas.toBuffer("image/png");
  //   fs.writeFileSync('./createdImages/image.png', buffer);
  // } 
  
  // const saveCanvas = document.createElement("button");
  // saveCanvas.addEventListener('click', saveFile(baseCanvas.id));
  // paletteBox.appendChild(saveCanvas);
  
  // saveCanvas.setAttribute('download', 'canvas.png');
  
  let swatchProps = {}; // for color buttons

  const supportsPointerEvents = window.PointerEvent;
  
});