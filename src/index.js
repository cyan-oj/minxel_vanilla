//const CanvasUtil = require("./scripts/canvas.js");
const docBody = document.getElementsByTagName("body");
const WorkSpace = require("./scripts/workspace");
const Palette = require("./scripts/palette.js");
const BrushCollection = require("./scripts/brushcollection.js");
const fs = require("fs");
const { toBuffer } = require('canvas');

document.addEventListener("DOMContentLoaded", function () {
  // set up palette and load defaults if not previous data
  const paletteBox = document.getElementById("palettebox");
  
  const defaultPalette = new Palette({
    name: "default", 
    colors: ["black", "white", "red"]
  });

  if (!localStorage.getItem("palette")) {
    localStorage.setItem("palette", JSON.stringify(defaultPalette)); 
  }

  const paletteJSON = JSON.parse(localStorage.getItem("palette"));
  const currentPalette = new Palette(paletteJSON);

  function loadPalette() { // resets palette box
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
    }
  }  
  loadPalette();
  
  paletteBox.addEventListener('click', (e) => { // change color on click
    e.preventDefault();
    console.log("changing colors")
    currentPalette.setActiveColor(e.target.color);
  });
  
  const brushBox = document.getElementById("brushbox");

  if (!localStorage.getItem("brushcollection")) {
    localStorage.setItem("brushcollection", JSON.stringify({
      name: "default",
      brushes: [1, 2, 15, 50]
    }));
  }
  
  const savedBrushSettings = JSON.parse(localStorage.getItem("brushcollection"));

  const brushCollection = new BrushCollection({name: "default"})

  savedBrushSettings.brushes.forEach((brush) => {
    brushCollection.addBrush({size: brush});
  })

  function loadBrushBox() {
    let brushes = brushCollection.brushes;
    let brushSizes = [];
    brushCollection.brushes.forEach((brush) => {
      brushSizes.unshift(brush.size);
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
    workSpace.brush = brushCollection.brushes[e.target.data];
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
    brush: brushCollection.brushes[0],
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

  const brushSettings = document.getElementById("brushsettings");
  const hexValue = document.getElementById("hexinput");
  const brushSize = document.getElementById("size");

  brushSettings.addEventListener("click", (e) => {
    switch(e.target.id) {
      case "addcolor":
        currentPalette.addColor(hexValue.value);
        loadPalette();
        break;
      case "brushsize":
        workSpace.brush.size = brushSize.value;
        break;
      case "savebrush":
        brushCollection.addBrush({
          size: brushSize.value
        })
        loadBrushBox();
        break;
      default:
        console.log("no brushsettings cases hit")
    }
  });

  const saveButton = document.getElementById("save");
  saveButton.addEventListener("click", saveFile);

  const supportsPointerEvents = window.PointerEvent;
  
});