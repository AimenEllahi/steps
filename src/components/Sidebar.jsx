// Sidebar.jsx
import React from "react";

function Sidebar({
  models,
  annontations,
  toggleModelVisibility,
  toggleDescriptionVisibility,
}) {
  return (
    <div className='fixed top-0 right-0 h-full w-1/5 bg-black flex flex-col p-4'>
      <h1 className='text-white text-lg mb-4'>Models</h1>
      <h2 className='text-white text-sm mb-2'>Visibility</h2>
      {models.map((model, index) => (
        <div key={index} className='flex items-center mb-2'>
          <input
            type='checkbox'
            checked={model.visible}
            onChange={() => toggleModelVisibility(index)}
            className='mr-2'
          />
          <p className='text-white'>{model.name}</p>
          {model.visible && (
            <div className='flex flex-col justify-end items-end'>
              {annontations
                .filter((annontation) => annontation.for === model.name)
                .map((annontation, i) => {
                  console.log(annontation);
                  return (
                    <div className='flex items-center'>
                      <input
                        key={i}
                        type='checkbox'
                        checked={annontation.visible}
                        onChange={(e) =>
                          toggleDescriptionVisibility(
                            annontation.id,
                            e.target.checked
                          )
                        }
                        className='ml-2 mr-2'
                      />
                      <p className='text-white'>{annontation.name}</p>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
