const { createCanvas, } = require('canvas');

class WorkSpace {
  constructor(options) {
    this.base = createCanvas(options.width, options.height);
    //debugger;
    this.base.id = "base";
    this.context = this.base.getContext("2d");

    options.parent.appendChild(this.base);

    this.palette = options.palette;

    
    this.selected = true;
    this.penPos = {
      x: 0,
      y: 0,
    };
    
    console.log(this.palette);

    addEventListener("mousemove", this.draw.bind(this))
    addEventListener("mousedown", this.setPosition.bind(this))
    addEventListener("mousenter", this.setPosition.bind(this))

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
  
  setPosition(e) {
    //debugger;
    let box = this.base.getBoundingClientRect();
    this.penPos.x = e.clientX - box.left;
    this.penPos.y = e.clientY - box.top;
  }

  draw(e) {
    if (e.buttons !== 1) return; // exits early if mouse is not pressed
    //let color = document.getElementById("hexinput").value; // choose color 
    let color = this.palette.activeColor;
    this.context.beginPath();
    this.context.lineWidth = 20;
    this.context.lineCap = "round";
    this.context.strokeStyle = color;
    this.context.moveTo(this.penPos.x, this.penPos.y); // line start position
    this.setPosition(e); // update pos
    this.context.lineTo(this.penPos.x, this.penPos.y); // line end position
    this.context.stroke(); 
  }
}

module.exports = WorkSpace;