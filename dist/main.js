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
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  const canvas = document.getElementById(\"canvas\");\n  canvas.width = 800;\n  canvas.height = 800;\n  const context = canvas.getContext(\"2d\");\n  const foreground = document.getElementById(\"swatch1\");\n  foreground.style.backgroundColor = \"red\";\n  const background = document.getElementById(\"swatch2\");\n  background.style.backgroundColor = \"black\";\n  const supportsPointerEvents = window.PointerEvent;\n  const buttonMap = {\n    tip: 0x1,\n    // \n    barrel: 0x2,\n    middle: 0x4,\n    eraser: 0x20\n  };\n  let swatchProps = {}; // for color buttons\n\n  let prevPos = {\n    x: 0,\n    y: 0\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJmb3JlZ3JvdW5kIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kIiwic3VwcG9ydHNQb2ludGVyRXZlbnRzIiwid2luZG93IiwiUG9pbnRlckV2ZW50IiwiYnV0dG9uTWFwIiwidGlwIiwiYmFycmVsIiwibWlkZGxlIiwiZXJhc2VyIiwic3dhdGNoUHJvcHMiLCJwcmV2UG9zIiwieCIsInkiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL21pbnhlbC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcclxuICBjYW52YXMud2lkdGggPSA4MDA7XHJcbiAgY2FudmFzLmhlaWdodCA9IDgwMDtcclxuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgY29uc3QgZm9yZWdyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dhdGNoMVwiKTtcclxuICBmb3JlZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XHJcbiAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dhdGNoMlwiKTtcclxuICBiYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcclxuXHJcbiAgY29uc3Qgc3VwcG9ydHNQb2ludGVyRXZlbnRzID0gd2luZG93LlBvaW50ZXJFdmVudDtcclxuXHJcbiAgY29uc3QgYnV0dG9uTWFwID0ge1xyXG4gICAgdGlwOiAweDEsIC8vIFxyXG4gICAgYmFycmVsOiAweDIsXHJcbiAgICBtaWRkbGU6IDB4NCxcclxuICAgIGVyYXNlcjogMHgyMCxcclxuICB9O1xyXG5cclxuICBsZXQgc3dhdGNoUHJvcHMgPSB7fTsgLy8gZm9yIGNvbG9yIGJ1dHRvbnNcclxuXHJcbiAgbGV0IHByZXZQb3MgPSB7XHJcbiAgICB4OiAwLFxyXG4gICAgeTogMFxyXG4gIH1cclxuXHJcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7RUFDeEQsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtFQUNBRCxNQUFNLENBQUNFLEtBQVAsR0FBZSxHQUFmO0VBQ0FGLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQixHQUFoQjtFQUNBLE1BQU1DLE9BQU8sR0FBR0osTUFBTSxDQUFDSyxVQUFQLENBQWtCLElBQWxCLENBQWhCO0VBRUEsTUFBTUMsVUFBVSxHQUFHUixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBbkI7RUFDQUssVUFBVSxDQUFDQyxLQUFYLENBQWlCQyxlQUFqQixHQUFtQyxLQUFuQztFQUNBLE1BQU1DLFVBQVUsR0FBR1gsUUFBUSxDQUFDRyxjQUFULENBQXdCLFNBQXhCLENBQW5CO0VBQ0FRLFVBQVUsQ0FBQ0YsS0FBWCxDQUFpQkMsZUFBakIsR0FBbUMsT0FBbkM7RUFFQSxNQUFNRSxxQkFBcUIsR0FBR0MsTUFBTSxDQUFDQyxZQUFyQztFQUVBLE1BQU1DLFNBQVMsR0FBRztJQUNoQkMsR0FBRyxFQUFFLEdBRFc7SUFDTjtJQUNWQyxNQUFNLEVBQUUsR0FGUTtJQUdoQkMsTUFBTSxFQUFFLEdBSFE7SUFJaEJDLE1BQU0sRUFBRTtFQUpRLENBQWxCO0VBT0EsSUFBSUMsV0FBVyxHQUFHLEVBQWxCLENBcEJ3RCxDQW9CbEM7O0VBRXRCLElBQUlDLE9BQU8sR0FBRztJQUNaQyxDQUFDLEVBQUUsQ0FEUztJQUVaQyxDQUFDLEVBQUU7RUFGUyxDQUFkO0FBS0QsQ0EzQkQifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW54ZWwvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;