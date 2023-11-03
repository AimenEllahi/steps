// Sidebar.jsx
import React from "react";

function Sidebar({ models, toggleModelVisibility }) {
  return (
    <div className="fixed top-0 right-0 h-full w-1/5 bg-gray-700 flex flex-col p-4">
      <h1 className="text-white text-lg mb-4">Models</h1>
      <h2 className="text-white text-sm mb-2">Visibility</h2>
      {models.map((model, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={model.visible}
            onChange={() => toggleModelVisibility(index)}
            className="mr-2"
          />
          <p className="text-white">{model.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
