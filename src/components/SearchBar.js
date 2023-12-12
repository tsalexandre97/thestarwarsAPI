import React, { useState } from 'react';
import { Lato } from 'next/font/google';
import Image from 'next/image';
const lato = Lato({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="mt-2 lg:w-full">
      <input
        type="text"
        placeholder="Enter the name in the planet"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`h-[40px] w-full text-center text-[#7D7D7D] font-normal text-[14px] leading-[16.8px] rounded-[5px] ${lato.className}`}
      />
      <button className="bg-[#DE1212] text-white text-center flex justify-center items-center w-full mt-2 h-[40px] rounded-[5px] font-semibold" onClick={handleSearch}>
        <Image
        src="icon-search.svg"
        className="mr-2"
        width={18}
        height={18}
        />
        Search</button>

      <div className="flex justify-between w-full text-white text-[14px] mt-6">
        <div className="flex font-semibold flex-row items-center justify-center h-[40px]">
          <Image 
            src="icon-filter.svg" 
            className="mr-2"
            width={16}
            height={16}
          />
          Filter
        </div>

        <div className="flex flex-row items-center justify-center h-[40px]">
          <Image 
            src="icon-down-arrow.svg" 
            className="mr-2"
            width={8}
            height={8}
          />
          Name
        </div>

        <div className="flex flex-row items-center justify-center h-[40px]">
          <Image 
            src="icon-down-arrow.svg" 
            className="mr-2"
            width={8}
            height={8}
          />
          Population
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
