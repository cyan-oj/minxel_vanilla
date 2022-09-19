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

  const testColors = [
    "red",
    "black",
    "white",
    "green"
  ];
  
  const currentPalette = new Palette("test", testColors);

  let options = {
    width: 800,
    height: 800,
    palette: currentPalette
  }
    
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
  
  
  // const foreground = document.getElementById("swatch1");
  // foreground.style.backgroundColor = "red";
  // const background = document.getElementById("swatch2");
  // background.style.backgroundColor = "black";
  
  //let activeColor = currentPalette.colors[0]
  
  paletteBox.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("changing colors")
    currentPalette.setActiveColor(e.target.color);
    console.log(currentPalette.activeColor);
  });

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
  
  
  
  let swatchProps = {}; // for color buttons

  const supportsPointerEvents = window.PointerEvent;

  const buttonMap = {
    tip: 0x1, // 
    barrel: 0x2,
    middle: 0x4,
    eraser: 0x20,
  };
  
  const pointerEvents = [
    'pointerdown',
    'pointerup',
    'pointercancel',
    'pointermove',
    'pointerover',
    'pointerout',
    'pointerenter',
    'pointerleave',
    'gotpointercapture',
    'lostpointercapture'
  ];


  document.addEventListener("mousemove", draw);
  document.addEventListener("mousedown", setPosition);
  document.addEventListener("mouseenter", setPosition);

  const pos = {
    x: 0,
    y: 0
  };
  
  function setPosition(e) {
    let boundingBox = baseCanvas.getBoundingClientRect();
    pos.x = e.clientX - boundingBox.left;
    pos.y = e.clientY - boundingBox.top;
  }

  function setColor() {

  }

  function draw(e) {
    if (e.buttons !== 1) return; // exits early if mouse is not pressed
    //let color = document.getElementById("hexinput").value; // choose color 
    let color = currentPalette.activeColor;
    context.beginPath();
    context.lineWidth = 20;
    context.lineCap = "round";
    context.strokeStyle = color;
    context.moveTo(pos.x, pos.y); // line start position
    setPosition(e);
    context.lineTo(pos.x, pos.y); // line end position
    context.stroke(); 
    
    // const pointerEvents = [ //pointer events for pressure
    //   'pointerdown',
    //   'pointerup',
    //   'pointercancel',
    //   'pointermove',
    //   'pointerover',
    //   'pointerout',
    //   'pointerenter',
    //   'pointerleave',
    //   'gotpointercapture',
    //   'lostpointercapture'
    // ];
  }
  

});