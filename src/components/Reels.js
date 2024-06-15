import React from 'react';
import './Reels.css';
import SearchVideos from './SearchVideos';
import { NavbarComp2 } from './Navbar2';

function Reels() {
  return (
    <>
    <NavbarComp2 /> 
      <div className="Reels">
        <h1 className='text-3xl pt-4 font-bold px-1 text-pink-600 text-center'>UJJWAL-GO</h1>
        <SearchVideos />
      </div>
    </>
  );
}

export default Reels;