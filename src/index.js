//const CanvasUtil = require("./scripts/canvas.js");
const WorkSpace = require("./scripts/workspace");
const Palette = require("./scripts/palette.js");
const BrushCollection = require("./scripts/brushcollection.js");
const fs = require("fs");
const { toBuffer } = require('canvas');

const docBody = document.getElementsByTagName("body");
const paletteBox = document.getElementById("palettebox");
const brushBox = document.getElementById("brushbox");

const brushDisplay = document.getElementById("brushDisplay");
const bCtx = brushDisplay.getContext('2d');

const toolboxes = document.getElementById("toolboxes");
const brushSize = document.getElementById("brushSize");
const sliders = document.getElementById("colorSliders");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const saveButton = document.getElementById("save");
saveButton.addEventListener("click", saveFile);

const supportsPointerEvents = window.PointerEvent;

// set up default palette & brush box
const defaultPalette = new Palette({
  name: "default", 
  colors: [
    "black", "white", "red"
  ]
});

if (!localStorage.getItem("palette")) {
  localStorage.setItem("palette", JSON.stringify(defaultPalette)); 
}

if (!localStorage.getItem("brushcollection")) {
  localStorage.setItem("brushcollection", JSON.stringify({
    name: "default",
    brushes: [1, 2, 15, 50]
  }));
}

// load existing settings if any, defaults if none
const paletteJSON = JSON.parse(localStorage.getItem("palette"));
const currentPalette = new Palette(paletteJSON);

const savedBrushSettings = JSON.parse(localStorage.getItem("brushcollection"));
const brushCollection = new BrushCollection({name: "default"})

savedBrushSettings.brushes.forEach((brush) => {
  brushCollection.addBrush({size: brush});
})

function loadPalette() { // reset palette box display
  colors = currentPalette.colors;
  localStorage.setItem("palette", JSON.stringify(currentPalette));
  if (colors.length > 0) {
    paletteBox.textContent = '';
    i = 1;
    colors.forEach((color) => {
      let button = document.createElement("button");
      button.className = "swatch";
      button.id = `swatch${i}`;
      button.color = color;
      button.style.backgroundColor = color;
      paletteBox.appendChild(button);
      i++;
    });
    let newColor = document.createElement("button");
    newColor.id = "newcolor";
    newColor.className = "swatch";
    newColor.innerText = "+";
    paletteBox.appendChild(newColor)
  }
}  
loadPalette();

paletteBox.addEventListener('click', (e) => { // change color on click
  e.preventDefault();
  console.log("changing colors")
  currentPalette.setActiveColor(e.target.color);
  setBrushDisplay();
});

function loadBrushBox() { // reset brush preset display
  let brushes = brushCollection.brushes;
  let brushSizes = [];
  brushCollection.brushes.forEach((brush) => {
    brushSizes.unshift(Number(brush.size));
  });

  localStorage.setItem("brushcollection", JSON.stringify({
    name: brushCollection.name,
    brushes: brushSizes
  }))

  if (brushes.length > 0) {
    brushBox.textContent = '';
    i = 0;
    brushes.forEach((brush) => {
      let button = document.createElement("button");
      button.className = "brush";
      button.id = `brush${i}`;
      button.data = i;
      button.innerText = `${brush.size}`;
      brushBox.appendChild(button);
      i++;
    });
  }
}
loadBrushBox();

brushBox.addEventListener('click', (e) => {
  e.preventDefault();
  console.log("changing size");
  workSpace.brush = Object.assign({}, brushCollection.brushes[e.target.data]);
  setBrushDisplay();
});

const buttonMap = {
  tip: 0x1, 
  barrel: 0x2,
  middle: 0x4,
  eraser: 0x20,
};

let options = {
  width: 900,
  height: 900,
  palette: currentPalette,
  brush: brushCollection.brushes[0],
  parent: docBody[0]
}

// set up initial canvas
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

function setBrushDisplay() {
  let radius = Number(workSpace.brush.size)/2;
  let color = workSpace.palette.activeColor;
  bCtx.clearRect(0, 0, 200, 200)
  bCtx.beginPath();
  bCtx.fillStyle = color;
  //debugger;
  bCtx.arc(100, 100, radius, 0, 2*Math.PI);
  bCtx.fill();
}

toolboxes.addEventListener("change", (e) => {
  //debugger;
  switch(e.target.id) {
    case "red":
    case "blue":
    case "green":
      const rgbString = (`rgb(${red.value}, ${green.value}, ${blue.value})`)
      workSpace.palette.activeColor = rgbString;
      loadPalette();
      break;
    case "brushSlider":
      //debugger;
      workSpace.brush.size = Number(brushSize.value);
      loadBrushBox();
      setBrushDisplay();
      break;
    default:
      console.log("no brushsettings chagne cases hit")
  }
});

toolboxes.addEventListener("click", (e) => {
  //debugger;
  switch(e.target.id) {
    case "newcolor":
      sliders.style.display === "none" ? sliders.style.display = "block" : sliders.style.display = "none";
      break;
    case "addcolor":
      const rgbString = (`rgb(${red.value}, ${green.value}, ${blue.value})`)
      currentPalette.addColor(rgbString);
      loadPalette();
      break;
    case "savebrush":
      brushCollection.addBrush({
        size: Number(brushSize.value)
      })
      loadBrushBox();
      break;
    case "reset":
      localStorage.clear();
      break;
    default:
      console.log("no brushsettings cases hit")
  }
});
