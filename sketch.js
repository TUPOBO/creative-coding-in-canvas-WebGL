const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: "A4"
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "#f345f6";
    context.fillRect(0, 0, width, height);
  };
};

canvasSketch(sketch, settings);
