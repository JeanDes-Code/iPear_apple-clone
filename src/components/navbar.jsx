import React from 'react';
import { bagImg, pearImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <img
          src={pearImg}
          alt='pear'
          width={30}
          height={30}
        />

        <div className='flex flex-1 justify-center items-center max-sm:hidden'>
          {navLists.map((links) => (
            <div
              className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'
              href='#'
              key={links}
            >
              {links}
            </div>
          ))}
        </div>

        <div className='flex items-center gap-7 max-sm:justify-end max-sm:flex-1'>
          <img
            src={searchImg}
            alt='search'
            width={18}
            height={18}
          />
          <img
            src={bagImg}
            alt='bag'
            width={18}
            height={18}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
