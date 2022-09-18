document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canvas");
  canvas.width = 800;
  canvas.height = 800;
  const context = canvas.getContext("2d");

  const foreground = document.getElementById("swatch1");
  foreground.style.backgroundColor = "red";
  const background = document.getElementById("swatch2");
  background.style.backgroundColor = "black";

  const supportsPointerEvents = window.PointerEvent;

  const buttonMap = {
    tip: 0x1, // 
    barrel: 0x2,
    middle: 0x4,
    eraser: 0x20,
  };

  let swatchProps = {}; // for color buttons

  let prevPos = {
    x: 0,
    y: 0
  }

});