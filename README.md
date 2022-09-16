# minxel.

minxel is a small-scale web-based painting app designed to make it easy to get new ideas in motion early, particularly for storyboarding/comics planning and color theory training. It features a small toolset designed to keep work focused but with exactly enough features to get things moving.

## Core Feature Set

#### Basic Image output.
- Minxel can:
	- open and edit .gifs with a palette of 16 or fewer colors
	- create new images of arbitrary canvas size
- Layered image editing
	- layers can be rearranged 
	- layers can be merged together and will respect arrangement when merged
	- layers can be locked to prevent accidental editing
		- layers can be alpha-locked to allow only painting on already-painted areas
- will use the HTML5 canvas to drive its core functionality.

#### Palette
- minxel's core functionality is the dynamic palette, a feature more associated with retro pixel-art-aimed image editors, but that definitely has its uses outside of this field!
- The user can define a palette as they go, laying down areas of color.
	- if they later change a color on the palette, that will also update the image with the new color.
	- This allows for quick compositional passes in grayscale or just ugly unthought-about colors, with room for instant readjustment later.
- This function leverages the way the GIF format stores its pixel colors -- as a map that references a predefined color palette in the header of the file.

#### Brushes
- The base brush tip is a square or circle of various size.
- The brush can be scaled on the x or y axis to change its shape, and rotated to different angles
- Brush can add a dithering pattern instead of just a solid fill color
- Brush properties can be manipulated with pen pressure based on user settings
	- wacom tablet support
	- apple pencil support
	- windows ink support
	- android 3rd party pen support

#### Other Image manipulation tools
- layer transforms (translate, rotate)
- fill tool (paint bucket)
	- make paint bucket responsive to multiple layers based on user selection
- Add basic shapes (circles, squares, triangles)
- Selection tools
	- basic shapes
	- magic wand
	- lasso

#### History
- minxel should store a history of user actions (brushstrokes, adding/removing a layer, etc.) that can be undone/redone.
- the history should be a user-defined number of actions
	- warn the user that a too-large history may affect performance


# Timeline
### Friday
- set up project skeleton with webpack
- a lot of docs reading and making small prototypes of sections based on API demos to familiarize myself with tools

### Saturday
- Implement basic drawing functionality
	- Set up canvas
	- Set up basic brush set
- Implement dynamic color editing
	- set up drawing objects that can hold a reference to a color and update the image accordingly
	- setup frame-refresh that can unload strokes onto a flattened image so the client is not holding hundreds or thousands of canvas SVG objects (brushstrokes) in memory by the end of a drawing
		- this *should* be the basis for the history feature
- Image Export. Working image should be saved to localStorage, and the user should also be able to save a final version to their computer.

### Sunday
- Overflow day for Saturday features
- if all finished, get a head start on UI

### Monday
- UI Day
- clean up layout with CSS
- brush tip editing interface
- side quick-settings 
- palette editor

### Tuesday
- Overflow UI day
- test UI with users and try to clean up common hitches
- make it user-friendly and pretty!
	- clean layout that makes it obvious where all tools are
	- tooltips to help guide a new user who may not be intuitively familiar with common web-painter features

### Wednesday
- Implement whichever bonus feature feels most likely to be completable by the deadline based on experience with the rest of the project. this could be:
	- layers
	- brush pressure-sensitivity 
	- selection tools



