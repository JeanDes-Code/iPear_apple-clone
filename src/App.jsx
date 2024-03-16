import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Highlights from './components/highlights';

const App = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
    </div>
  );
};

export default App;
