// DescriptionDisplay.jsx
import React from "react";
import { X } from "lucide-react";

const DescriptionDisplay = ({ description, onClose }) => (
  <div className='bg-white  bg-opacity-80 p-5 pt-7 rounded-md shadow-md absolute top-10 left-10'>
    <div
      className='absolute top-1 right-1 flex items-end justify-end cursor-pointer '
      onClick={onClose}
    >
      <X size={15} />
    </div>
    <p className='text-gray-800'>{description}</p>
  </div>
);

export default DescriptionDisplay;
