import React from "react";

export default function Brusher(props) {
  const id = "brushercanvas"; // usually would use uuid here
  id.replace("-", "");
  React.useEffect(() => {
    // make sure parent element doesn't cover the canvas
    let parentEl = document.getElementById(id).parentElement;
    parentEl.style.zIndex = 1;
    parentEl.style.position = "relative";
    parentEl.style.backgroundSize = "cover";
    let brusher = new BrusherClass({
      ...props.options,
      element: "#" + id,
    });
    brusher.init();
    return () => {
      console.log("out boy");
      brusher = null;
    };
  });

  return (
    <>
      <div
        id={id}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {props.children}
      </div>
    </>
  );
}

class BrusherClass {
  /**
   * BrusherClass constructor, pass in instructions
   * @param  {Object} options configurations for BrusherClass
   */
  constructor(options = {}) {
    this.trailSteps = [];
    this.drawCanvas = null;
    this.drawCanvasContext = null;
    this.brushCanvas = null;
    this.brushCanvasContext = null;
    this.image = null;
    this.tailAnimationFrame = null;

    this.options = {
      image: null,
      brushSize: 80,
      keepCleared: false,
      brushStyle: "round",
      brushBlur: 30,
      ...options,
    };

    // if clearTrailTime not chosen, choose optimal value according to keepCleared
    if (!this.options.clearTrailTime)
      this.options.clearTrailTime = this.options.keepCleared ? 120 : 690;

    // want to be able to target any dom node and create multiple instances
    // so we create an inner div inside the provided wrapper element
    let wrapperEl = document.querySelector(this.options.element);
    // place the element that deals with everything inside this wrapper
    wrapperEl.style.position = "relative";
    let innerBgEl = document.createElement("div");
    innerBgEl.style = `height: 100%; width: 100%; top: 0; left: 0; position: absolute;`;
    wrapperEl.appendChild(innerBgEl);
    this.domNode = innerBgEl;
    this.domNode.style.zIndex = -2;
    this.drawTail = this.drawTail.bind(this);
    this.validateOptions();
  }

  /**
   * Validates for any invalid options given
   */
  validateOptions() {
    if (!this.options.image) {
      throw new Error("Image path to use as brush is required");
    } else if (!this.domNode) {
      throw new Error(
        "Unable to target specified DOM node (use a valid query selector)"
      );
    }
  }

  /**
   * Initializes the brusher, while preparing the
   * canvas and binding the necessary events
   */
  init() {
    if (!BrusherClass.isCanvasSupported()) {
      return;
    }

    this.prepareCanvas();
    this.bind();
  }

  handler = (e) => {
    if (!e.clientX || !e.clientY) {
      return;
    }

    // Keep the co-ordinates and time, this will be used while drawing
    // the stroke. Time helps us decrease the length of stroke over time.
    this.trailSteps.unshift({
      time: Date.now(),
      ...this.getMousePositionInCanvas(e),
    });
    this.drawTail();
  };

  bind() {
    document.addEventListener("mousemove", this.handler);
  }

  /**
   * Gets the mouse position relative to canvas
   * @param evMouseMove
   * @returns {{x: number, y: number}}
   */
  getMousePositionInCanvas(evMouseMove) {
    const canvasRect = this.drawCanvas.getBoundingClientRect();

    return {
      x: evMouseMove.clientX - canvasRect.left,
      y: evMouseMove.clientY - canvasRect.top,
    };
  }

  /**
   * Prepares the canvases i.e. one upon which we will draw the image
   * and the other holds just the image for us to draw on to the
   * drawing canvas
   */
  prepareCanvas() {
    this.prepareDrawingCanvas();
    this.preparebrushCanvas();
    this.loadSelectedImage();
  }

  /**
   * Prepares the canvas attached to the document, upon which we
   * will draw the non-blurred image
   */
  prepareDrawingCanvas() {
    if (this.drawCanvas && this.drawCanvas.parentElement) {
      this.drawCanvas.parentElement.removeChild(this.drawCanvas);
    }

    const canvas = this.createCanvasNode();

    // absolute for any dom node
    canvas.style.position = "absolute";
    canvas.style.zIndex = -1;

    this.drawCanvas = canvas;
    this.drawCanvasContext = canvas.getContext("2d");
    let domNode = this.domNode;

    domNode.appendChild(this.drawCanvas);
  }

  /**
   * Prepares the canvas for the image which will help us draw the colored
   * image on top of the blurred image/empty background
   */
  preparebrushCanvas() {
    const canvas = this.createCanvasNode();

    this.brushCanvas = canvas;
    this.brushCanvasContext = canvas.getContext("2d");

    this.brushCanvasContext.lineCap = this.options.brushStyle;
    this.brushCanvasContext.shadowBlur = this.options.brushBlur;
    this.brushCanvasContext.shadowColor = "#000";
  }

  /**
   * Loads the given image in the virtual image property and
   * draws the tail if necessary
   */
  loadSelectedImage() {
    if (this.image) {
      return;
    }

    this.image = new Image();
    this.image.src = require("../../assets/img/hero/" + this.options.image);
    this.image.addEventListener("load", () => this.drawTail());
    this.image.addEventListener("error", (e) =>
      console.error("Failed to load image", e)
    );
  }

  /**
   * Draws tail at the path where mouse was last moved
   */
  drawTail() {
    this.removeOldSteps();

    window.cancelAnimationFrame(this.tailAnimationFrame);
    this.tailAnimationFrame = window.requestAnimationFrame(this.drawTail);

    // Do not clear the drawn image if the blur is to be kept
    if (!this.options.keepCleared) {
      this.brushCanvasContext.clearRect(
        0,
        0,
        this.brushCanvas.width,
        this.brushCanvas.height
      );
    }

    this.createStrokeFromSteps();

    let drawHeight =
      (this.drawCanvas.width / this.image.naturalWidth) *
      this.image.naturalHeight;
    let drawWidth = this.drawCanvas.width;

    if (drawHeight < this.drawCanvas.height) {
      drawHeight = this.drawCanvas.height;
      drawWidth =
        (this.drawCanvas.height / this.image.naturalHeight) *
        this.image.naturalWidth;
    }

    this.drawCanvasContext.drawImage(this.image, 0, 0, drawWidth, drawHeight);
    this.drawCanvasContext.globalCompositeOperation = "destination-in";
    this.drawCanvasContext.drawImage(this.brushCanvas, 0, 0);
    this.drawCanvasContext.globalCompositeOperation = "source-over";
  }

  /**
   * Creates stroke from the recorded mouse steps
   */
  createStrokeFromSteps() {
    const currentTime = Date.now();

    for (let counter = 1; counter < this.trailSteps.length; counter++) {
      this.brushCanvasContext.strokeStyle = `rgba(0,0,0,0.25)`;
      this.brushCanvasContext.lineWidth = this.options.brushSize;
      this.brushCanvasContext.beginPath();
      this.brushCanvasContext.moveTo(
        this.trailSteps[counter - 1].x,
        this.trailSteps[counter - 1].y
      );
      this.brushCanvasContext.lineTo(
        this.trailSteps[counter].x,
        this.trailSteps[counter].y
      );
      this.brushCanvasContext.stroke();
    }
  }

  /**
   * Remove any steps older than one second to not keep
   * them piling up in memory
   */
  removeOldSteps() {
    const currentTimeStamp = Date.now();

    for (let counter = 0; counter < this.trailSteps.length; counter++) {
      if (
        currentTimeStamp - this.trailSteps[counter].time >
        this.options.clearTrailTime
      ) {
        this.trailSteps.length = counter;
      }
    }
  }

  /**
   * Creates canvas for the set element
   * @returns {HTMLCanvasElement}
   */
  createCanvasNode() {
    const elementDimensions = this.getElementDimensions();

    const canvas = document.createElement("canvas");
    canvas.className = this.options.element; // unique identifier
    canvas.width = elementDimensions.width;
    canvas.height = elementDimensions.height;

    return canvas;
  }

  /**
   * Gets node from the given query selector
   * @returns {Object|Element}
   */
  getElementNode() {
    if (this.domNode) return this.domNode;
    else return document.querySelector("body");
  }

  /**
   * Gets dimensions for the selected element
   * @returns {ClientRect | DOMRect}
   */
  getElementDimensions() {
    return this.getElementNode().getBoundingClientRect();
  }

  /**
   * Checks if canvas is supported or not
   * @returns {boolean}
   */
  static isCanvasSupported() {
    const elem = document.createElement("canvas");
    return !!(elem.getContext && elem.getContext("2d"));
  }
}
