import React from 'react';

const WebGLNotSupported = ({ model, models, setModel }) => {
  const defineSourceImage = () => {};

  console.log(model);

  return (
    <div className='flex flex-col items-center mt-10'>
      <div className='w-full h-[350px] overflow-hidden relative'>
        <img
          className='w-full h-full object-contain'
          src={model.placeholderImage}
          alt={model.title}
        />
      </div>

      <div className='mx-auto w-full'>
        <p className='text-sm font-light text-center mb-5'>{model.title}</p>

        <div className='flex-center'>
          <ul className='color-container'>
            {models.map((item, i) => (
              <li
                key={i}
                className='w-6 h-6 rounded-full mx-2 cursor-pointer'
                style={{ backgroundColor: item.color[0] }}
                onClick={() => setModel(item)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WebGLNotSupported;
