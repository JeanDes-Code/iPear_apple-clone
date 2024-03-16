import React from 'react';
import * as Sentry from '@sentry/react';

import Navbar from './components/navbar';
import Hero from './components/hero';
import Highlights from './components/highlights';
import Model from './components/model';
import Features from './components/features';

const App = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
    </div>
  );
};

export default Sentry.withProfiler(App);
