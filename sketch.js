const canvasSketch = require("canvas-sketch");
const { lerp } = require("canvas-sketch-util/math");
const settings = {
  dimensions: [2048, 2048]
};

const sketch = () => {
  const createGrid = () => {
    const position = [];
    const count = 20;
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const x = count <= 1 ? 0.5 : i / (count - 1);
        const y = count <= 1 ? 0.5 : j / (count - 1);
        position.push([x, y]);
      }
    }
    console.log(position);
    return position;
  };

  const position = createGrid();
  const margin = 200;

  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    position.forEach(([x, y]) => {
      const u = lerp(margin, width - margin, x);
      const v = lerp(margin, height - margin, y);

      context.beginPath();
      context.lineWidth = 40;
      context.arc(u, v, 100, 0, Math.PI * 2, false);
      context.stroke();
    });
  };
};

canvasSketch(sketch, settings);
