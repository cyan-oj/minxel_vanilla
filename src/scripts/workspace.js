const { createCanvas } = require('canvas');

class WorkSpace {
  constructor (options) {
    this.base = createCanvas(options.width, options.height);
    this.base.id = "base";
    this.context = this.base.getContext("2d");
    options.parent.appendChild(this.base);
    this.penPos = {
      x: 0,
      y: 0,
    }
  }
  
  setPosition(e) {
    let boundingBox = this.base.getBoundingClientRect();
    this.penPos.x = e.clientX - boundingBox.left;
    this.penPos.y = e.clientY - boundingBox.top;
  }

  draw(e) {
    if (e.buttons !== 1) return; // exits early if mouse is not pressed
    //let color = document.getElementById("hexinput").value; // choose color 
    let color = currentPalette.activeColor;
    context.beginPath();
    context.lineWidth = 20;
    context.lineCap = "round";
    context.strokeStyle = color;
    context.moveTo(this.penPos.x, this.penPos.y); // line start position
    setPosition(e);
    context.lineTo(this.penPos.x, this.penPos.y); // line end position
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
  

}

module.exports = WorkSpace;