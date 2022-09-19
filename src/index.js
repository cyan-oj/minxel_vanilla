//const CanvasUtil = require("./scripts/canvas.js");
const docBody = document.getElementsByTagName("body");
const { createCanvas } = require('canvas');
const fs = require("fs");

document.addEventListener("DOMContentLoaded", function () {
  // const canvas = document.getElementById("canvas");
  // canvas.width = 800;
  // canvas.height = 800;
  // const context = canvas.getContext("2d");
  // let canvasProps = {
  //   name: "home",
  //   fill: "white",
  //   width: 800,
  //   height: 800
  // }

  const baseCanvas = createCanvas(800, 800);
  const context = baseCanvas.getContext("2d");
  docBody[0].appendChild(baseCanvas);
  const paletteBox = document.getElementById("palettebox");

  const frameColors = [
    "red",
    "black",
    "white"
  ];

  function loadPalette(colors) {
    if (colors.length > 0) {
      for (let i = 0; i < colors.length; i ++) {
        let button = document.createElement("button");
        button.className = "swatch";
        button.id = `swatch${i + 1}`
        button.style.backgroundColor = colors[i]
        paletteBox.appendChild(button);
      }
    }
  }  

  loadPalette(frameColors);

  const saveCanvas = document.createElement("button");
  // saveCanvas.setAttribute('download', 'canvas.png');
  saveCanvas.addEventListener('click', saveFile);
  paletteBox.appendChild(saveCanvas);

  // const foreground = document.getElementById("swatch1");
  // foreground.style.backgroundColor = "red";
  // const background = document.getElementById("swatch2");
  // background.style.backgroundColor = "black";
  
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


  // let prevPos = {
  //   x: 0,
  //   y: 0
  // }

  // function draw(evt) {
  //   let point = ""

  //   let screenPos = {
  //     x: evt.clientX,
  //     y: evt.clientY
  //   }


  // }

  document.addEventListener("mousemove", draw);
  document.addEventListener("mousedown", setPosition);
  document.addEventListener("mouseenter", setPosition);

  const pos = {
    x: 0,
    y: 0
  };

  function setPosition(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
  }

  function draw(e) {
    if (e.buttons !== 1) return; // exits early if mouse is not pressed
    let color = document.getElementById("hexinput").value;

    context.beginPath();
    context.lineWidth = 20;
    context.lineCap = "round";
    context.strokeStyle = color;
    context.moveTo(pos.x, pos.y); // line start position
    setPosition(e);
    context.lineTo(pos.x, pos.y); // line end position
    context.stroke(); 
  }

  function saveFile() {
    const buffer = baseCanvas.toBuffer("image/png");
    fs.writeFileSync('./image.png', buffer);
  } 

});