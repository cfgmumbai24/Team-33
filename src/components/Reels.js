import React from 'react';
import './Reels.css';
import SearchVideos from './SearchVideos';
import { NavbarComp2 } from './Navbar2';

function Reels() {
  return (
    <>
    <NavbarComp2 /> 
      <div className="Reels">
        <h1 className='text-xl font-semibold px-1'>Your Finance Guide: Watch and Learn</h1>
        <SearchVideos />
      </div>
    </>
  );
}

export default Reels;