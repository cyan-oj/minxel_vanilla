/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("//const CanvasUtil = require(\"./scripts/canvas.js\");\nconst docBody = document.getElementsByTagName(\"body\");\n\nconst WorkSpace = __webpack_require__(/*! ./scripts/workspace */ \"./src/scripts/workspace.js\");\n\nconst Palette = __webpack_require__(/*! ./scripts/palette.js */ \"./src/scripts/palette.js\");\n\nconst fs = __webpack_require__(/*! fs */ \"?569f\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // const canvas = document.getElementById(\"canvas\");\n  // canvas.width = 800;\n  // canvas.height = 800;\n  // const context = canvas.getContext(\"2d\");\n  const paletteBox = document.getElementById(\"palettebox\");\n  const testColors = [\"red\", \"black\", \"white\", \"green\"];\n  const currentPalette = new Palette(\"test\", testColors);\n\n  function loadPalette() {\n    colors = currentPalette.colors;\n\n    if (colors.length > 0) {\n      for (let i = 0; i < colors.length; i++) {\n        let button = document.createElement(\"button\");\n        button.className = \"swatch\";\n        button.id = `swatch${i + 1}`;\n        button.color = colors[i];\n        button.style.backgroundColor = colors[i];\n        paletteBox.appendChild(button);\n      }\n    }\n  }\n\n  loadPalette(currentPalette);\n  paletteBox.addEventListener('click', e => {\n    e.preventDefault();\n    console.log(\"changing colors\");\n    currentPalette.setActiveColor(e.target.color);\n    console.log(currentPalette.activeColor);\n  });\n  const buttonMap = {\n    tip: 0x1,\n    // \n    barrel: 0x2,\n    middle: 0x4,\n    eraser: 0x20\n  };\n  let options = {\n    width: 800,\n    height: 800,\n    palette: currentPalette,\n    parent: docBody[0]\n  };\n  const workSpace = new WorkSpace(options); // document.addEventListener(\"mousemove\", workSpace.draw);\n  // document.addEventListener(\"mousedown\", workSpace.setPosition);\n  // document.addEventListener(\"mouseenter\", workSpace.setPosition);\n  // const baseCanvas = createCanvas(800, 800);\n  // baseCanvas.id = \"can1\"\n  // console.log(\"outside saveFile\");\n  // console.log(baseCanvas);\n  // const context = baseCanvas.getContext(\"2d\");\n  // docBody[0].appendChild(baseCanvas);\n  // const paletteBox = document.getElementById(\"palettebox\");\n  // function saveFile(canvasID) { // need to bind to context?\n  //   const canvas = document.getElementById(canvasID)\n  //   console.log(\"inside saveFile\")\n  //   console.log(canvas);\n  //   const buffer = canvas.toBuffer(\"image/png\");\n  //   fs.writeFileSync('./createdImages/image.png', buffer);\n  // } \n  // const saveCanvas = document.createElement(\"button\");\n  // saveCanvas.addEventListener('click', saveFile(baseCanvas.id));\n  // paletteBox.appendChild(saveCanvas);\n  // saveCanvas.setAttribute('download', 'canvas.png');\n\n  let swatchProps = {}; // for color buttons\n\n  const supportsPointerEvents = window.PointerEvent;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly9taW54ZWwvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbnN0IENhbnZhc1V0aWwgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2NhbnZhcy5qc1wiKTtcclxuY29uc3QgZG9jQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKTtcclxuY29uc3QgV29ya1NwYWNlID0gcmVxdWlyZSgnLi9zY3JpcHRzL3dvcmtzcGFjZScpO1xyXG5jb25zdCBQYWxldHRlID0gcmVxdWlyZShcIi4vc2NyaXB0cy9wYWxldHRlLmpzXCIpO1xyXG5jb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAvLyBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcclxuICAvLyBjYW52YXMud2lkdGggPSA4MDA7XHJcbiAgLy8gY2FudmFzLmhlaWdodCA9IDgwMDtcclxuICAvLyBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICBjb25zdCBwYWxldHRlQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWxldHRlYm94XCIpO1xyXG5cclxuICBjb25zdCB0ZXN0Q29sb3JzID0gW1xyXG4gICAgXCJyZWRcIixcclxuICAgIFwiYmxhY2tcIixcclxuICAgIFwid2hpdGVcIixcclxuICAgIFwiZ3JlZW5cIlxyXG4gIF07XHJcbiAgXHJcbiAgY29uc3QgY3VycmVudFBhbGV0dGUgPSBuZXcgUGFsZXR0ZShcInRlc3RcIiwgdGVzdENvbG9ycyk7XHJcbiAgXHJcbiAgZnVuY3Rpb24gbG9hZFBhbGV0dGUoKSB7XHJcbiAgICBjb2xvcnMgPSBjdXJyZW50UGFsZXR0ZS5jb2xvcnM7XHJcbiAgICBpZiAoY29sb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpICsrKSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwic3dhdGNoXCI7XHJcbiAgICAgICAgYnV0dG9uLmlkID0gYHN3YXRjaCR7aSArIDF9YDtcclxuICAgICAgICBidXR0b24uY29sb3IgPSBjb2xvcnNbaV07XHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yc1tpXVxyXG4gICAgICAgIHBhbGV0dGVCb3guYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gIFxyXG5cclxuICBsb2FkUGFsZXR0ZShjdXJyZW50UGFsZXR0ZSk7XHJcblxyXG4gIHBhbGV0dGVCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coXCJjaGFuZ2luZyBjb2xvcnNcIilcclxuICAgIGN1cnJlbnRQYWxldHRlLnNldEFjdGl2ZUNvbG9yKGUudGFyZ2V0LmNvbG9yKTtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQYWxldHRlLmFjdGl2ZUNvbG9yKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYnV0dG9uTWFwID0ge1xyXG4gICAgdGlwOiAweDEsIC8vIFxyXG4gICAgYmFycmVsOiAweDIsXHJcbiAgICBtaWRkbGU6IDB4NCxcclxuICAgIGVyYXNlcjogMHgyMCxcclxuICB9O1xyXG5cclxuICBsZXQgb3B0aW9ucyA9IHtcclxuICAgIHdpZHRoOiA4MDAsXHJcbiAgICBoZWlnaHQ6IDgwMCxcclxuICAgIHBhbGV0dGU6IGN1cnJlbnRQYWxldHRlLFxyXG4gICAgcGFyZW50OiBkb2NCb2R5WzBdXHJcbiAgfVxyXG5cclxuICBjb25zdCB3b3JrU3BhY2UgPSBuZXcgV29ya1NwYWNlKG9wdGlvbnMpOyBcclxuXHJcbiAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB3b3JrU3BhY2UuZHJhdyk7XHJcbiAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB3b3JrU3BhY2Uuc2V0UG9zaXRpb24pO1xyXG4gIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHdvcmtTcGFjZS5zZXRQb3NpdGlvbik7XHJcbiAgICBcclxuICAvLyBjb25zdCBiYXNlQ2FudmFzID0gY3JlYXRlQ2FudmFzKDgwMCwgODAwKTtcclxuICAvLyBiYXNlQ2FudmFzLmlkID0gXCJjYW4xXCJcclxuICAvLyBjb25zb2xlLmxvZyhcIm91dHNpZGUgc2F2ZUZpbGVcIik7XHJcbiAgLy8gY29uc29sZS5sb2coYmFzZUNhbnZhcyk7XHJcbiAgLy8gY29uc3QgY29udGV4dCA9IGJhc2VDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIC8vIGRvY0JvZHlbMF0uYXBwZW5kQ2hpbGQoYmFzZUNhbnZhcyk7XHJcbiAgLy8gY29uc3QgcGFsZXR0ZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFsZXR0ZWJveFwiKTtcclxuICBcclxuICAvLyBmdW5jdGlvbiBzYXZlRmlsZShjYW52YXNJRCkgeyAvLyBuZWVkIHRvIGJpbmQgdG8gY29udGV4dD9cclxuICAvLyAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0lEKVxyXG4gIC8vICAgY29uc29sZS5sb2coXCJpbnNpZGUgc2F2ZUZpbGVcIilcclxuICAvLyAgIGNvbnNvbGUubG9nKGNhbnZhcyk7XHJcbiAgLy8gICBjb25zdCBidWZmZXIgPSBjYW52YXMudG9CdWZmZXIoXCJpbWFnZS9wbmdcIik7XHJcbiAgLy8gICBmcy53cml0ZUZpbGVTeW5jKCcuL2NyZWF0ZWRJbWFnZXMvaW1hZ2UucG5nJywgYnVmZmVyKTtcclxuICAvLyB9IFxyXG4gIFxyXG4gIC8vIGNvbnN0IHNhdmVDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIC8vIHNhdmVDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYXZlRmlsZShiYXNlQ2FudmFzLmlkKSk7XHJcbiAgLy8gcGFsZXR0ZUJveC5hcHBlbmRDaGlsZChzYXZlQ2FudmFzKTtcclxuICBcclxuICAvLyBzYXZlQ2FudmFzLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnY2FudmFzLnBuZycpO1xyXG4gIFxyXG4gIGxldCBzd2F0Y2hQcm9wcyA9IHt9OyAvLyBmb3IgY29sb3IgYnV0dG9uc1xyXG5cclxuICBjb25zdCBzdXBwb3J0c1BvaW50ZXJFdmVudHMgPSB3aW5kb3cuUG9pbnRlckV2ZW50O1xyXG4gIFxyXG59KTsiXSwibmFtZXMiOlsiZG9jQm9keSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJXb3JrU3BhY2UiLCJyZXF1aXJlIiwiUGFsZXR0ZSIsImZzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhbGV0dGVCb3giLCJnZXRFbGVtZW50QnlJZCIsInRlc3RDb2xvcnMiLCJjdXJyZW50UGFsZXR0ZSIsImxvYWRQYWxldHRlIiwiY29sb3JzIiwibGVuZ3RoIiwiaSIsImJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpZCIsImNvbG9yIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhcHBlbmRDaGlsZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzZXRBY3RpdmVDb2xvciIsInRhcmdldCIsImFjdGl2ZUNvbG9yIiwiYnV0dG9uTWFwIiwidGlwIiwiYmFycmVsIiwibWlkZGxlIiwiZXJhc2VyIiwib3B0aW9ucyIsIndpZHRoIiwiaGVpZ2h0IiwicGFsZXR0ZSIsInBhcmVudCIsIndvcmtTcGFjZSIsInN3YXRjaFByb3BzIiwic3VwcG9ydHNQb2ludGVyRXZlbnRzIiwid2luZG93IiwiUG9pbnRlckV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/palette.js":
/*!********************************!*\
  !*** ./src/scripts/palette.js ***!
  \********************************/
/***/ (function(module) {

eval("// palette class, holds a name, a list of colors and their postitions, and someday metadata about the user who created it\nclass Palette {\n  constructor() {\n    let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"untitled\";\n    let colors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n    this.name = name;\n    this.colors = colors;\n    this.size = colors.length;\n    this.activeColor = this.colors[0];\n  } // color options - rgba value, desired color position from 0-15\n\n\n  addColor(color) {\n    this.colors.push(color);\n  }\n\n  setActiveColor(color) {\n    console.log(\"from Palette changing color\");\n    this.activeColor = color;\n  }\n\n}\n\nmodule.exports = Palette;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wYWxldHRlLmpzLmpzIiwibmFtZXMiOlsiUGFsZXR0ZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsImNvbG9ycyIsInNpemUiLCJsZW5ndGgiLCJhY3RpdmVDb2xvciIsImFkZENvbG9yIiwiY29sb3IiLCJwdXNoIiwic2V0QWN0aXZlQ29sb3IiLCJjb25zb2xlIiwibG9nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWlueGVsLy4vc3JjL3NjcmlwdHMvcGFsZXR0ZS5qcz84ODhkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhbGV0dGUgY2xhc3MsIGhvbGRzIGEgbmFtZSwgYSBsaXN0IG9mIGNvbG9ycyBhbmQgdGhlaXIgcG9zdGl0aW9ucywgYW5kIHNvbWVkYXkgbWV0YWRhdGEgYWJvdXQgdGhlIHVzZXIgd2hvIGNyZWF0ZWQgaXRcclxuY2xhc3MgUGFsZXR0ZSB7XHJcbiAgY29uc3RydWN0b3IobmFtZSA9IFwidW50aXRsZWRcIiwgY29sb3JzID0gW10pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmNvbG9ycyA9IGNvbG9ycztcclxuICAgIHRoaXMuc2l6ZSA9IGNvbG9ycy5sZW5ndGg7XHJcbiAgICB0aGlzLmFjdGl2ZUNvbG9yID0gdGhpcy5jb2xvcnNbMF07XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gY29sb3Igb3B0aW9ucyAtIHJnYmEgdmFsdWUsIGRlc2lyZWQgY29sb3IgcG9zaXRpb24gZnJvbSAwLTE1XHJcbiAgXHJcbiAgYWRkQ29sb3IoY29sb3IpIHtcclxuICAgIHRoaXMuY29sb3JzLnB1c2goY29sb3IpO1xyXG4gIH07ICAgXHJcblxyXG4gIHNldEFjdGl2ZUNvbG9yKGNvbG9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImZyb20gUGFsZXR0ZSBjaGFuZ2luZyBjb2xvclwiKVxyXG4gICAgdGhpcy5hY3RpdmVDb2xvciA9IGNvbG9yO1xyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUGFsZXR0ZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsTUFBTUEsT0FBTixDQUFjO0VBQ1pDLFdBQVcsR0FBaUM7SUFBQSxJQUFoQ0MsSUFBZ0MsdUVBQXpCLFVBQXlCO0lBQUEsSUFBYkMsTUFBYSx1RUFBSixFQUFJO0lBQzFDLEtBQUtELElBQUwsR0FBWUEsSUFBWjtJQUNBLEtBQUtDLE1BQUwsR0FBY0EsTUFBZDtJQUNBLEtBQUtDLElBQUwsR0FBWUQsTUFBTSxDQUFDRSxNQUFuQjtJQUNBLEtBQUtDLFdBQUwsR0FBbUIsS0FBS0gsTUFBTCxDQUFZLENBQVosQ0FBbkI7RUFDRCxDQU5XLENBU1o7OztFQUVBSSxRQUFRLENBQUNDLEtBQUQsRUFBUTtJQUNkLEtBQUtMLE1BQUwsQ0FBWU0sSUFBWixDQUFpQkQsS0FBakI7RUFDRDs7RUFFREUsY0FBYyxDQUFDRixLQUFELEVBQVE7SUFDcEJHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaO0lBQ0EsS0FBS04sV0FBTCxHQUFtQkUsS0FBbkI7RUFDRDs7QUFsQlc7O0FBcUJkSyxNQUFNLENBQUNDLE9BQVAsR0FBaUJkLE9BQWpCIn0=\n//# sourceURL=webpack-internal:///./src/scripts/palette.js\n");

/***/ }),

/***/ "./src/scripts/workspace.js":
/*!**********************************!*\
  !*** ./src/scripts/workspace.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const {\n  createCanvas\n} = __webpack_require__(/*! canvas */ \"./node_modules/canvas/browser.js\");\n\nclass WorkSpace {\n  constructor(options) {\n    //debugger;\n    this.base = createCanvas(options.width, options.height);\n    this.base.id = \"base\";\n    this.context = this.base.getContext(\"2d\");\n    options.parent.appendChild(this.base);\n    this.palette = options.palette;\n    this.box = this.base.getBoundingClientRect();\n    this.selected = true;\n    this.penPos = {\n      x: 0,\n      y: 0\n    };\n    console.log(this.palette);\n    addEventListener(\"mousemove\", this.draw.bind(this));\n    addEventListener(\"mousedown\", this.setPosition.bind(this));\n    addEventListener(\"mousenter\", this.setPosition.bind(this));\n  }\n\n  setPosition(e) {\n    //debugger;\n    this.penPos.x = e.clientX - this.box.left;\n    this.penPos.y = e.clientY - this.box.top;\n  }\n\n  draw(e) {\n    if (e.buttons !== 1) return; // exits early if mouse is not pressed\n    //let color = document.getElementById(\"hexinput\").value; // choose color \n\n    let color = this.palette.activeColor;\n    this.context.beginPath();\n    this.context.lineWidth = 20;\n    this.context.lineCap = \"round\";\n    this.context.strokeStyle = color;\n    this.context.moveTo(this.penPos.x, this.penPos.y); // line start position\n\n    this.setPosition(e);\n    this.context.lineTo(this.penPos.x, this.penPos.y); // line end position\n\n    this.context.stroke(); // const pointerEvents = [ //pointer events for pressure\n    //   'pointerdown',\n    //   'pointerup',\n    //   'pointercancel',\n    //   'pointermove',\n    //   'pointerover',\n    //   'pointerout',\n    //   'pointerenter',\n    //   'pointerleave',\n    //   'gotpointercapture',\n    //   'lostpointercapture'\n    // ];\n  }\n\n}\n\nmodule.exports = WorkSpace;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy93b3Jrc3BhY2UuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtFQUFFQTtBQUFGLElBQW1CQyxtQkFBTyxDQUFDLGdEQUFELENBQWhDOztBQUVBLE1BQU1DLFNBQU4sQ0FBZ0I7RUFDZEMsV0FBVyxDQUFDQyxPQUFELEVBQVU7SUFDbkI7SUFDQSxLQUFLQyxJQUFMLEdBQVlMLFlBQVksQ0FBQ0ksT0FBTyxDQUFDRSxLQUFULEVBQWdCRixPQUFPLENBQUNHLE1BQXhCLENBQXhCO0lBQ0EsS0FBS0YsSUFBTCxDQUFVRyxFQUFWLEdBQWUsTUFBZjtJQUNBLEtBQUtDLE9BQUwsR0FBZSxLQUFLSixJQUFMLENBQVVLLFVBQVYsQ0FBcUIsSUFBckIsQ0FBZjtJQUVBTixPQUFPLENBQUNPLE1BQVIsQ0FBZUMsV0FBZixDQUEyQixLQUFLUCxJQUFoQztJQUVBLEtBQUtRLE9BQUwsR0FBZVQsT0FBTyxDQUFDUyxPQUF2QjtJQUVBLEtBQUtDLEdBQUwsR0FBVyxLQUFLVCxJQUFMLENBQVVVLHFCQUFWLEVBQVg7SUFDQSxLQUFLQyxRQUFMLEdBQWdCLElBQWhCO0lBQ0EsS0FBS0MsTUFBTCxHQUFjO01BQ1pDLENBQUMsRUFBRSxDQURTO01BRVpDLENBQUMsRUFBRTtJQUZTLENBQWQ7SUFLQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS1IsT0FBakI7SUFFQVMsZ0JBQWdCLENBQUMsV0FBRCxFQUFjLEtBQUtDLElBQUwsQ0FBVUMsSUFBVixDQUFlLElBQWYsQ0FBZCxDQUFoQjtJQUNBRixnQkFBZ0IsQ0FBQyxXQUFELEVBQWMsS0FBS0csV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBZCxDQUFoQjtJQUNBRixnQkFBZ0IsQ0FBQyxXQUFELEVBQWMsS0FBS0csV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBZCxDQUFoQjtFQUVEOztFQUVEQyxXQUFXLENBQUNDLENBQUQsRUFBSTtJQUNiO0lBQ0EsS0FBS1QsTUFBTCxDQUFZQyxDQUFaLEdBQWdCUSxDQUFDLENBQUNDLE9BQUYsR0FBWSxLQUFLYixHQUFMLENBQVNjLElBQXJDO0lBQ0EsS0FBS1gsTUFBTCxDQUFZRSxDQUFaLEdBQWdCTyxDQUFDLENBQUNHLE9BQUYsR0FBWSxLQUFLZixHQUFMLENBQVNnQixHQUFyQztFQUNEOztFQUVEUCxJQUFJLENBQUNHLENBQUQsRUFBSTtJQUNOLElBQUlBLENBQUMsQ0FBQ0ssT0FBRixLQUFjLENBQWxCLEVBQXFCLE9BRGYsQ0FDdUI7SUFDN0I7O0lBQ0EsSUFBSUMsS0FBSyxHQUFHLEtBQUtuQixPQUFMLENBQWFvQixXQUF6QjtJQUNBLEtBQUt4QixPQUFMLENBQWF5QixTQUFiO0lBQ0EsS0FBS3pCLE9BQUwsQ0FBYTBCLFNBQWIsR0FBeUIsRUFBekI7SUFDQSxLQUFLMUIsT0FBTCxDQUFhMkIsT0FBYixHQUF1QixPQUF2QjtJQUNBLEtBQUszQixPQUFMLENBQWE0QixXQUFiLEdBQTJCTCxLQUEzQjtJQUNBLEtBQUt2QixPQUFMLENBQWE2QixNQUFiLENBQW9CLEtBQUtyQixNQUFMLENBQVlDLENBQWhDLEVBQW1DLEtBQUtELE1BQUwsQ0FBWUUsQ0FBL0MsRUFSTSxDQVE2Qzs7SUFDbkQsS0FBS00sV0FBTCxDQUFpQkMsQ0FBakI7SUFDQSxLQUFLakIsT0FBTCxDQUFhOEIsTUFBYixDQUFvQixLQUFLdEIsTUFBTCxDQUFZQyxDQUFoQyxFQUFtQyxLQUFLRCxNQUFMLENBQVlFLENBQS9DLEVBVk0sQ0FVNkM7O0lBQ25ELEtBQUtWLE9BQUwsQ0FBYStCLE1BQWIsR0FYTSxDQWFOO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNEOztBQXpEYTs7QUE0RGhCQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ4QyxTQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL21pbnhlbC8uL3NyYy9zY3JpcHRzL3dvcmtzcGFjZS5qcz9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY3JlYXRlQ2FudmFzIH0gPSByZXF1aXJlKCdjYW52YXMnKTtcclxuXHJcbmNsYXNzIFdvcmtTcGFjZSB7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgLy9kZWJ1Z2dlcjtcclxuICAgIHRoaXMuYmFzZSA9IGNyZWF0ZUNhbnZhcyhvcHRpb25zLndpZHRoLCBvcHRpb25zLmhlaWdodCk7XHJcbiAgICB0aGlzLmJhc2UuaWQgPSBcImJhc2VcIjtcclxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuYmFzZS5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgb3B0aW9ucy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5iYXNlKTtcclxuXHJcbiAgICB0aGlzLnBhbGV0dGUgPSBvcHRpb25zLnBhbGV0dGU7XHJcblxyXG4gICAgdGhpcy5ib3ggPSB0aGlzLmJhc2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMucGVuUG9zID0ge1xyXG4gICAgICB4OiAwLFxyXG4gICAgICB5OiAwLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnBhbGV0dGUpO1xyXG5cclxuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5kcmF3LmJpbmQodGhpcykpXHJcbiAgICBhZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuc2V0UG9zaXRpb24uYmluZCh0aGlzKSlcclxuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW50ZXJcIiwgdGhpcy5zZXRQb3NpdGlvbi5iaW5kKHRoaXMpKVxyXG5cclxuICB9XHJcbiAgXHJcbiAgc2V0UG9zaXRpb24oZSkge1xyXG4gICAgLy9kZWJ1Z2dlcjtcclxuICAgIHRoaXMucGVuUG9zLnggPSBlLmNsaWVudFggLSB0aGlzLmJveC5sZWZ0O1xyXG4gICAgdGhpcy5wZW5Qb3MueSA9IGUuY2xpZW50WSAtIHRoaXMuYm94LnRvcDtcclxuICB9XHJcblxyXG4gIGRyYXcoZSkge1xyXG4gICAgaWYgKGUuYnV0dG9ucyAhPT0gMSkgcmV0dXJuOyAvLyBleGl0cyBlYXJseSBpZiBtb3VzZSBpcyBub3QgcHJlc3NlZFxyXG4gICAgLy9sZXQgY29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhleGlucHV0XCIpLnZhbHVlOyAvLyBjaG9vc2UgY29sb3IgXHJcbiAgICBsZXQgY29sb3IgPSB0aGlzLnBhbGV0dGUuYWN0aXZlQ29sb3I7XHJcbiAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gMjA7XHJcbiAgICB0aGlzLmNvbnRleHQubGluZUNhcCA9IFwicm91bmRcIjtcclxuICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgdGhpcy5jb250ZXh0Lm1vdmVUbyh0aGlzLnBlblBvcy54LCB0aGlzLnBlblBvcy55KTsgLy8gbGluZSBzdGFydCBwb3NpdGlvblxyXG4gICAgdGhpcy5zZXRQb3NpdGlvbihlKTtcclxuICAgIHRoaXMuY29udGV4dC5saW5lVG8odGhpcy5wZW5Qb3MueCwgdGhpcy5wZW5Qb3MueSk7IC8vIGxpbmUgZW5kIHBvc2l0aW9uXHJcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7IFxyXG4gICAgXHJcbiAgICAvLyBjb25zdCBwb2ludGVyRXZlbnRzID0gWyAvL3BvaW50ZXIgZXZlbnRzIGZvciBwcmVzc3VyZVxyXG4gICAgLy8gICAncG9pbnRlcmRvd24nLFxyXG4gICAgLy8gICAncG9pbnRlcnVwJyxcclxuICAgIC8vICAgJ3BvaW50ZXJjYW5jZWwnLFxyXG4gICAgLy8gICAncG9pbnRlcm1vdmUnLFxyXG4gICAgLy8gICAncG9pbnRlcm92ZXInLFxyXG4gICAgLy8gICAncG9pbnRlcm91dCcsXHJcbiAgICAvLyAgICdwb2ludGVyZW50ZXInLFxyXG4gICAgLy8gICAncG9pbnRlcmxlYXZlJyxcclxuICAgIC8vICAgJ2dvdHBvaW50ZXJjYXB0dXJlJyxcclxuICAgIC8vICAgJ2xvc3Rwb2ludGVyY2FwdHVyZSdcclxuICAgIC8vIF07XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFdvcmtTcGFjZTsiXSwibmFtZXMiOlsiY3JlYXRlQ2FudmFzIiwicmVxdWlyZSIsIldvcmtTcGFjZSIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsImJhc2UiLCJ3aWR0aCIsImhlaWdodCIsImlkIiwiY29udGV4dCIsImdldENvbnRleHQiLCJwYXJlbnQiLCJhcHBlbmRDaGlsZCIsInBhbGV0dGUiLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzZWxlY3RlZCIsInBlblBvcyIsIngiLCJ5IiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkcmF3IiwiYmluZCIsInNldFBvc2l0aW9uIiwiZSIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50WSIsInRvcCIsImJ1dHRvbnMiLCJjb2xvciIsImFjdGl2ZUNvbG9yIiwiYmVnaW5QYXRoIiwibGluZVdpZHRoIiwibGluZUNhcCIsInN0cm9rZVN0eWxlIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/workspace.js\n");

/***/ }),

/***/ "./node_modules/canvas/browser.js":
/*!****************************************!*\
  !*** ./node_modules/canvas/browser.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("/* globals document, ImageData */\n\nconst parseFont = __webpack_require__(/*! ./lib/parse-font */ \"./node_modules/canvas/lib/parse-font.js\")\n\nexports.parseFont = parseFont\n\nexports.createCanvas = function (width, height) {\n  return Object.assign(document.createElement('canvas'), { width: width, height: height })\n}\n\nexports.createImageData = function (array, width, height) {\n  // Browser implementation of ImageData looks at the number of arguments passed\n  switch (arguments.length) {\n    case 0: return new ImageData()\n    case 1: return new ImageData(array)\n    case 2: return new ImageData(array, width)\n    default: return new ImageData(array, width, height)\n  }\n}\n\nexports.loadImage = function (src, options) {\n  return new Promise(function (resolve, reject) {\n    const image = Object.assign(document.createElement('img'), options)\n\n    function cleanup () {\n      image.onload = null\n      image.onerror = null\n    }\n\n    image.onload = function () { cleanup(); resolve(image) }\n    image.onerror = function () { cleanup(); reject(new Error('Failed to load the image \"' + src + '\"')) }\n\n    image.src = src\n  })\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FudmFzL2Jyb3dzZXIuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsa0JBQWtCLG1CQUFPLENBQUMsaUVBQWtCOztBQUU1QyxpQkFBaUI7O0FBRWpCLG9CQUFvQjtBQUNwQiwyREFBMkQsOEJBQThCO0FBQ3pGOztBQUVBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxXQUFXO0FBQzVDLGtDQUFrQyxXQUFXOztBQUU3QztBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL21pbnhlbC8uL25vZGVfbW9kdWxlcy9jYW52YXMvYnJvd3Nlci5qcz9kMTZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbHMgZG9jdW1lbnQsIEltYWdlRGF0YSAqL1xuXG5jb25zdCBwYXJzZUZvbnQgPSByZXF1aXJlKCcuL2xpYi9wYXJzZS1mb250JylcblxuZXhwb3J0cy5wYXJzZUZvbnQgPSBwYXJzZUZvbnRcblxuZXhwb3J0cy5jcmVhdGVDYW52YXMgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSwgeyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pXG59XG5cbmV4cG9ydHMuY3JlYXRlSW1hZ2VEYXRhID0gZnVuY3Rpb24gKGFycmF5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIC8vIEJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgSW1hZ2VEYXRhIGxvb2tzIGF0IHRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHBhc3NlZFxuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBuZXcgSW1hZ2VEYXRhKClcbiAgICBjYXNlIDE6IHJldHVybiBuZXcgSW1hZ2VEYXRhKGFycmF5KVxuICAgIGNhc2UgMjogcmV0dXJuIG5ldyBJbWFnZURhdGEoYXJyYXksIHdpZHRoKVxuICAgIGRlZmF1bHQ6IHJldHVybiBuZXcgSW1hZ2VEYXRhKGFycmF5LCB3aWR0aCwgaGVpZ2h0KVxuICB9XG59XG5cbmV4cG9ydHMubG9hZEltYWdlID0gZnVuY3Rpb24gKHNyYywgb3B0aW9ucykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGNvbnN0IGltYWdlID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSwgb3B0aW9ucylcblxuICAgIGZ1bmN0aW9uIGNsZWFudXAgKCkge1xuICAgICAgaW1hZ2Uub25sb2FkID0gbnVsbFxuICAgICAgaW1hZ2Uub25lcnJvciA9IG51bGxcbiAgICB9XG5cbiAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7IGNsZWFudXAoKTsgcmVzb2x2ZShpbWFnZSkgfVxuICAgIGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7IGNsZWFudXAoKTsgcmVqZWN0KG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgdGhlIGltYWdlIFwiJyArIHNyYyArICdcIicpKSB9XG5cbiAgICBpbWFnZS5zcmMgPSBzcmNcbiAgfSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/canvas/browser.js\n");

/***/ }),

/***/ "./node_modules/canvas/lib/parse-font.js":
/*!***********************************************!*\
  !*** ./node_modules/canvas/lib/parse-font.js ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
eval("\n\n/**\n * Font RegExp helpers.\n */\n\nconst weights = 'bold|bolder|lighter|[1-9]00'\nconst styles = 'italic|oblique'\nconst variants = 'small-caps'\nconst stretches = 'ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded'\nconst units = 'px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q'\nconst string = '\\'([^\\']+)\\'|\"([^\"]+)\"|[\\\\w\\\\s-]+'\n\n// [ [ <‘font-style’> || <font-variant-css21> || <‘font-weight’> || <‘font-stretch’> ]?\n//    <‘font-size’> [ / <‘line-height’> ]? <‘font-family’> ]\n// https://drafts.csswg.org/css-fonts-3/#font-prop\nconst weightRe = new RegExp(`(${weights}) +`, 'i')\nconst styleRe = new RegExp(`(${styles}) +`, 'i')\nconst variantRe = new RegExp(`(${variants}) +`, 'i')\nconst stretchRe = new RegExp(`(${stretches}) +`, 'i')\nconst sizeFamilyRe = new RegExp(\n  `([\\\\d\\\\.]+)(${units}) *((?:${string})( *, *(?:${string}))*)`)\n\n/**\n * Cache font parsing.\n */\n\nconst cache = {}\n\nconst defaultHeight = 16 // pt, common browser default\n\n/**\n * Parse font `str`.\n *\n * @param {String} str\n * @return {Object} Parsed font. `size` is in device units. `unit` is the unit\n *   appearing in the input string.\n * @api private\n */\n\nmodule.exports = str => {\n  // Cached\n  if (cache[str]) return cache[str]\n\n  // Try for required properties first.\n  const sizeFamily = sizeFamilyRe.exec(str)\n  if (!sizeFamily) return // invalid\n\n  // Default values and required properties\n  const font = {\n    weight: 'normal',\n    style: 'normal',\n    stretch: 'normal',\n    variant: 'normal',\n    size: parseFloat(sizeFamily[1]),\n    unit: sizeFamily[2],\n    family: sizeFamily[3].replace(/[\"']/g, '').replace(/ *, */g, ',')\n  }\n\n  // Optional, unordered properties.\n  let weight, style, variant, stretch\n  // Stop search at `sizeFamily.index`\n  const substr = str.substring(0, sizeFamily.index)\n  if ((weight = weightRe.exec(substr))) font.weight = weight[1]\n  if ((style = styleRe.exec(substr))) font.style = style[1]\n  if ((variant = variantRe.exec(substr))) font.variant = variant[1]\n  if ((stretch = stretchRe.exec(substr))) font.stretch = stretch[1]\n\n  // Convert to device units. (`font.unit` is the original unit)\n  // TODO: ch, ex\n  switch (font.unit) {\n    case 'pt':\n      font.size /= 0.75\n      break\n    case 'pc':\n      font.size *= 16\n      break\n    case 'in':\n      font.size *= 96\n      break\n    case 'cm':\n      font.size *= 96.0 / 2.54\n      break\n    case 'mm':\n      font.size *= 96.0 / 25.4\n      break\n    case '%':\n      // TODO disabled because existing unit tests assume 100\n      // font.size *= defaultHeight / 100 / 0.75\n      break\n    case 'em':\n    case 'rem':\n      font.size *= defaultHeight / 0.75\n      break\n    case 'q':\n      font.size *= 96 / 25.4 / 4\n      break\n  }\n\n  return (cache[str] = font)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FudmFzL2xpYi9wYXJzZS1mb250LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFFBQVE7QUFDeEMsK0JBQStCLE9BQU87QUFDdEMsaUNBQWlDLFNBQVM7QUFDMUMsaUNBQWlDLFVBQVU7QUFDM0M7QUFDQSxpQkFBaUIsTUFBTSxTQUFTLE9BQU8sWUFBWSxPQUFPOztBQUUxRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWlueGVsLy4vbm9kZV9tb2R1bGVzL2NhbnZhcy9saWIvcGFyc2UtZm9udC5qcz9mNjA0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIEZvbnQgUmVnRXhwIGhlbHBlcnMuXG4gKi9cblxuY29uc3Qgd2VpZ2h0cyA9ICdib2xkfGJvbGRlcnxsaWdodGVyfFsxLTldMDAnXG5jb25zdCBzdHlsZXMgPSAnaXRhbGljfG9ibGlxdWUnXG5jb25zdCB2YXJpYW50cyA9ICdzbWFsbC1jYXBzJ1xuY29uc3Qgc3RyZXRjaGVzID0gJ3VsdHJhLWNvbmRlbnNlZHxleHRyYS1jb25kZW5zZWR8Y29uZGVuc2VkfHNlbWktY29uZGVuc2VkfHNlbWktZXhwYW5kZWR8ZXhwYW5kZWR8ZXh0cmEtZXhwYW5kZWR8dWx0cmEtZXhwYW5kZWQnXG5jb25zdCB1bml0cyA9ICdweHxwdHxwY3xpbnxjbXxtbXwlfGVtfGV4fGNofHJlbXxxJ1xuY29uc3Qgc3RyaW5nID0gJ1xcJyhbXlxcJ10rKVxcJ3xcIihbXlwiXSspXCJ8W1xcXFx3XFxcXHMtXSsnXG5cbi8vIFsgWyA84oCYZm9udC1zdHlsZeKAmT4gfHwgPGZvbnQtdmFyaWFudC1jc3MyMT4gfHwgPOKAmGZvbnQtd2VpZ2h04oCZPiB8fCA84oCYZm9udC1zdHJldGNo4oCZPiBdP1xuLy8gICAgPOKAmGZvbnQtc2l6ZeKAmT4gWyAvIDzigJhsaW5lLWhlaWdodOKAmT4gXT8gPOKAmGZvbnQtZmFtaWx54oCZPiBdXG4vLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLWZvbnRzLTMvI2ZvbnQtcHJvcFxuY29uc3Qgd2VpZ2h0UmUgPSBuZXcgUmVnRXhwKGAoJHt3ZWlnaHRzfSkgK2AsICdpJylcbmNvbnN0IHN0eWxlUmUgPSBuZXcgUmVnRXhwKGAoJHtzdHlsZXN9KSArYCwgJ2knKVxuY29uc3QgdmFyaWFudFJlID0gbmV3IFJlZ0V4cChgKCR7dmFyaWFudHN9KSArYCwgJ2knKVxuY29uc3Qgc3RyZXRjaFJlID0gbmV3IFJlZ0V4cChgKCR7c3RyZXRjaGVzfSkgK2AsICdpJylcbmNvbnN0IHNpemVGYW1pbHlSZSA9IG5ldyBSZWdFeHAoXG4gIGAoW1xcXFxkXFxcXC5dKykoJHt1bml0c30pICooKD86JHtzdHJpbmd9KSggKiwgKig/OiR7c3RyaW5nfSkpKilgKVxuXG4vKipcbiAqIENhY2hlIGZvbnQgcGFyc2luZy5cbiAqL1xuXG5jb25zdCBjYWNoZSA9IHt9XG5cbmNvbnN0IGRlZmF1bHRIZWlnaHQgPSAxNiAvLyBwdCwgY29tbW9uIGJyb3dzZXIgZGVmYXVsdFxuXG4vKipcbiAqIFBhcnNlIGZvbnQgYHN0cmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fSBQYXJzZWQgZm9udC4gYHNpemVgIGlzIGluIGRldmljZSB1bml0cy4gYHVuaXRgIGlzIHRoZSB1bml0XG4gKiAgIGFwcGVhcmluZyBpbiB0aGUgaW5wdXQgc3RyaW5nLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBzdHIgPT4ge1xuICAvLyBDYWNoZWRcbiAgaWYgKGNhY2hlW3N0cl0pIHJldHVybiBjYWNoZVtzdHJdXG5cbiAgLy8gVHJ5IGZvciByZXF1aXJlZCBwcm9wZXJ0aWVzIGZpcnN0LlxuICBjb25zdCBzaXplRmFtaWx5ID0gc2l6ZUZhbWlseVJlLmV4ZWMoc3RyKVxuICBpZiAoIXNpemVGYW1pbHkpIHJldHVybiAvLyBpbnZhbGlkXG5cbiAgLy8gRGVmYXVsdCB2YWx1ZXMgYW5kIHJlcXVpcmVkIHByb3BlcnRpZXNcbiAgY29uc3QgZm9udCA9IHtcbiAgICB3ZWlnaHQ6ICdub3JtYWwnLFxuICAgIHN0eWxlOiAnbm9ybWFsJyxcbiAgICBzdHJldGNoOiAnbm9ybWFsJyxcbiAgICB2YXJpYW50OiAnbm9ybWFsJyxcbiAgICBzaXplOiBwYXJzZUZsb2F0KHNpemVGYW1pbHlbMV0pLFxuICAgIHVuaXQ6IHNpemVGYW1pbHlbMl0sXG4gICAgZmFtaWx5OiBzaXplRmFtaWx5WzNdLnJlcGxhY2UoL1tcIiddL2csICcnKS5yZXBsYWNlKC8gKiwgKi9nLCAnLCcpXG4gIH1cblxuICAvLyBPcHRpb25hbCwgdW5vcmRlcmVkIHByb3BlcnRpZXMuXG4gIGxldCB3ZWlnaHQsIHN0eWxlLCB2YXJpYW50LCBzdHJldGNoXG4gIC8vIFN0b3Agc2VhcmNoIGF0IGBzaXplRmFtaWx5LmluZGV4YFxuICBjb25zdCBzdWJzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIHNpemVGYW1pbHkuaW5kZXgpXG4gIGlmICgod2VpZ2h0ID0gd2VpZ2h0UmUuZXhlYyhzdWJzdHIpKSkgZm9udC53ZWlnaHQgPSB3ZWlnaHRbMV1cbiAgaWYgKChzdHlsZSA9IHN0eWxlUmUuZXhlYyhzdWJzdHIpKSkgZm9udC5zdHlsZSA9IHN0eWxlWzFdXG4gIGlmICgodmFyaWFudCA9IHZhcmlhbnRSZS5leGVjKHN1YnN0cikpKSBmb250LnZhcmlhbnQgPSB2YXJpYW50WzFdXG4gIGlmICgoc3RyZXRjaCA9IHN0cmV0Y2hSZS5leGVjKHN1YnN0cikpKSBmb250LnN0cmV0Y2ggPSBzdHJldGNoWzFdXG5cbiAgLy8gQ29udmVydCB0byBkZXZpY2UgdW5pdHMuIChgZm9udC51bml0YCBpcyB0aGUgb3JpZ2luYWwgdW5pdClcbiAgLy8gVE9ETzogY2gsIGV4XG4gIHN3aXRjaCAoZm9udC51bml0KSB7XG4gICAgY2FzZSAncHQnOlxuICAgICAgZm9udC5zaXplIC89IDAuNzVcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAncGMnOlxuICAgICAgZm9udC5zaXplICo9IDE2XG4gICAgICBicmVha1xuICAgIGNhc2UgJ2luJzpcbiAgICAgIGZvbnQuc2l6ZSAqPSA5NlxuICAgICAgYnJlYWtcbiAgICBjYXNlICdjbSc6XG4gICAgICBmb250LnNpemUgKj0gOTYuMCAvIDIuNTRcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbW0nOlxuICAgICAgZm9udC5zaXplICo9IDk2LjAgLyAyNS40XG4gICAgICBicmVha1xuICAgIGNhc2UgJyUnOlxuICAgICAgLy8gVE9ETyBkaXNhYmxlZCBiZWNhdXNlIGV4aXN0aW5nIHVuaXQgdGVzdHMgYXNzdW1lIDEwMFxuICAgICAgLy8gZm9udC5zaXplICo9IGRlZmF1bHRIZWlnaHQgLyAxMDAgLyAwLjc1XG4gICAgICBicmVha1xuICAgIGNhc2UgJ2VtJzpcbiAgICBjYXNlICdyZW0nOlxuICAgICAgZm9udC5zaXplICo9IGRlZmF1bHRIZWlnaHQgLyAwLjc1XG4gICAgICBicmVha1xuICAgIGNhc2UgJ3EnOlxuICAgICAgZm9udC5zaXplICo9IDk2IC8gMjUuNCAvIDRcbiAgICAgIGJyZWFrXG4gIH1cblxuICByZXR1cm4gKGNhY2hlW3N0cl0gPSBmb250KVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/canvas/lib/parse-font.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW54ZWwvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ }),

/***/ "?569f":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (function() {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;