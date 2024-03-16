import React from 'react';
import { Html } from '@react-three/drei';
import { Loader2 } from 'lucide-react';

const Loader = () => {
  return (
    <Html>
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
        <div className='w-[10vw] h-[10vw]'>
          <Loader2 className='text-slate-500 animate-spin' />
        </div>
      </div>
    </Html>
  );
};

export default Loader;
