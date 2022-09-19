//const CanvasUtil = require("./scripts/canvas.js");
const docBody = document.getElementsByTagName("body");
const WorkSpace = require('./scripts/workspace');
const Palette = require("./scripts/palette.js");
const fs = require("fs");
const { toBuffer } = require('canvas');

document.addEventListener("DOMContentLoaded", function () {
  // const canvas = document.getElementById("canvas");
  // canvas.width = 800;
  // canvas.height = 800;
  // const context = canvas.getContext("2d");
  const paletteBox = document.getElementById("palettebox");

  const testColors = [
    "red",
    "black",
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
  
  function saveFile() { // need to bind to context?
    debugger;
    const canvas = document.getElementById("base")
    console.log("inside saveFile")
    console.log(canvas);

    //canvas.toBlob()
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync('./createdImages/image.png', buffer);

    // toBlob(callback, type)
  } 

  const addColor = document.getElementById("addcolor");
  const hexValue = document.getElementById("hexinput");

  addColor.addEventListener("click", (e) => {
    currentPalette.addColor(hexValue.value);
    loadPalette();
  });

  const saveButton = document.getElementById("save");
  saveButton.addEventListener("click", saveFile);

  const supportsPointerEvents = window.PointerEvent;
  
});