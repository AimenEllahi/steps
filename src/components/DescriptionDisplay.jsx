// DescriptionDisplay.jsx
import React from "react";

const DescriptionDisplay = ({ description }) => (
  <div className="bg-white bg-opacity-80 p-4 rounded-md shadow-md absolute top-10 left-10">
    <p className="text-gray-800">{description}</p>
  </div>
);

export default DescriptionDisplay;
