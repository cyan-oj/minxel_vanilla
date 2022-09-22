## minxel.

[minxel](https://cyan-oj.github.io/minxel/) is a small-scale web painter designed for getting out quick ideas.

#### palette
colors can be selected from the palette menu. hitting the `+` icon will allow you to choose a new color to draw with byt ajusting the sliders for hue, saturation, and lightness. If you want to save the color to the palette as a preset, hit `add color`.

#### brushes
brush size can be adjusted with the slider below the brush preview. to save a size as preset, hit `save brush`.

palettes and brushes will be saved to the browser, hitting `reset` will revert all palette and brush settings to defaults and refresh the page.

to save your work as a .png file, hit `save`.

## implemenatation details

#### technologies used
- DOM
- HTML5 Canvas

the draw function relies on the HTML5 `canvas`. a `mousemove` eventlistener on the canvas triggers the `draw(event)` function. when the user clicks on the canvas, the function is called continously to draw a path between the two most recent positions.

```javascript
// within the Workspace object that holds the drawing canvas
setPosition(e) {
	let box = this.base.getBoundingClientRect();
	this.penPos.x = e.clientX - box.left;
	this.penPos.y = e.clientY - box.top;
}

draw(e) {
	if (e.buttons !== 1) return; //skip if mouse not held down

	const color = this.palette.activeColor;
	const size = this.brush.size;

	this.context.beginPath();

	this.context.lineWidth = size;
	this.context.lineCap = "round";
	this.context.strokeStyle = color;

	this.context.moveTo(this.penPos.x, this.penPos.y); // line start position
	this.setPosition(e); // update pos
	this.context.lineTo(this.penPos.x, this.penPos.y); // line end position
	this.context.stroke(); 
}
```

#### todo
- pen pressure via HTML5 pointer events
- fix and re-add eraser
- brushstroke history to alow for undoing/redoing actions
- 
