import React, { useState } from 'react';
import './Reels.css';
import SearchVideos from './SearchVideos';
import { NavbarComp2 } from './Navbar2';

function Reels() {
  // const [selectedLanguage, setSelectedLanguage] = useState('English');

  // const handleLanguageChange = (event) => {
  //   setSelectedLanguage(event.target.value);
  // };

  return (
    <>
      <NavbarComp2 /> 
      <div className="Reels">
        <h1 className='text-3xl pt-4 font-bold px-1 text-pink-600 text-center'>Kwick-Learn</h1>
        <div className="search-bar">
          
          {/* <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="dropdown"
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Marathi">Marathi</option>
          </select> */}
          <SearchVideos />
        </div>
      </div>
    </>
  );
}

export default Reels;
