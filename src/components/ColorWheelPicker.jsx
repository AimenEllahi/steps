import React, { useEffect, useRef } from "react";

const ColorWheelPicker = () => {
  const canvasRef = useRef(null);

  const drawLayer = (
    context,
    centerX,
    centerY,
    startAngle,
    endAngle,
    innerRadius,
    outerRadius,
    hueValues,
    saturationVary,
    lightnessVary
  ) => {
    for (let i = 0; i < 30; i++) {
      const start = ((i * startAngle - 1) * Math.PI) / 180;
      const end = ((i * startAngle + endAngle) * Math.PI) / 180;
      context.beginPath();
      context.arc(centerX, centerY, innerRadius, start, end, false);
      context.arc(centerX, centerY, outerRadius, end, start, true);
      context.closePath();
      const hue = hueValues[i];
      const saturation = saturationVary - i * 2;
      const lightness = lightnessVary + i * 2;
      const gradient = context.createRadialGradient(
        centerX,
        centerY,
        innerRadius,
        centerX,
        centerY,
        outerRadius
      );
      gradient.addColorStop(0, `hsl(${hue}, ${saturation}%, ${lightness}%)`);
      gradient.addColorStop(
        1,
        `hsl(${hue + startAngle}, ${saturation}%, ${lightness}%)`
      );
      context.fillStyle = gradient;
      context.fill();
      context.strokeStyle = "white";
      context.lineWidth = 1;
      context.stroke();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2;
    const sectionAngle = 360 / 30;

    drawLayer(
      context,
      centerX,
      centerY,
      sectionAngle,
      sectionAngle,
      radius * 0.2,
      radius * 0.4,
      Array.from({ length: 30 }, (_, i) => 60 + i * (360 / 30)),
      60,
      40
    );

    drawLayer(
      context,
      centerX,
      centerY,
      sectionAngle,
      sectionAngle,
      radius * 0.4,
      radius * 0.6,
      Array.from({ length: 30 }, (_, i) => 30 + i * (360 / 30)),
      70,
      40
    );

    drawLayer(
      context,
      centerX,
      centerY,
      sectionAngle,
      sectionAngle,
      radius * 0.6,
      radius * 0.8,
      Array.from({ length: 30 }, (_, i) => i * (360 / 30)),
      80,
      40
    );

    drawLayer(
      context,
      centerX,
      centerY,
      sectionAngle,
      sectionAngle,
      radius,
      radius,
      Array.from({ length: 30 }, (_, i) => i * (360 / 30)),
      100,
      50
    );

    canvas.addEventListener("click", function (event) {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const imageData = context.getImageData(x, y, 1, 1).data;
      const color = `rgb(${imageData[0]}, ${imageData[1]}, ${imageData[2]})`;
      console.log("Selected Color:", color);
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="colorPicker"
      width="300"
      height="300"
      style={{ margin: "0 auto", display: "block" }}
    />
  );
};

export default ColorWheelPicker;
