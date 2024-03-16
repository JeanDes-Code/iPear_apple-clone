import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Highlights from './components/highlights';
import Model from './components/model';

const App = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </div>
  );
};

export default App;
