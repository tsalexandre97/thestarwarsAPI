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
  const [optionName, setOptionName] = useState(0);

  const handleSearch = () => {
    onSearch(searchTerm, optionName);
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
        alt="Icon Search"
        />
        Search</button>

      <div className="flex justify-between w-full text-white text-[14px] mt-6">
        <div className="flex font-semibold flex-row items-center justify-center h-[40px]">
          <Image 
            src="icon-filter.svg" 
            className="mr-2"
            width={16}
            height={16}
            alt="Icon Filter"
          />
          Filter
        </div>

        <div className="flex flex-row items-center justify-center h-[40px]">
          <Image 
            src="icon-down-arrow.svg" 
            alt="Icon Down Arrow"
            className="mr-2"
            width={8}
            height={8}
          />
          <select className="bg-[#000]" onChange={(e) => setOptionName(e.target.value)}>
          <option value="0">Name</option>
          <option value="1">Tatooine</option>
          <option value="2">Alderaan</option>
          <option value="3">Yavin IV</option>
          <option value="4">Hoth</option>
          <option value="5">Dagobah</option>
          <option value="6">Bespin</option>
          <option value="7">Endor</option>
          <option value="8">Naboo</option>
          <option value="9">Coruscant</option>
          <option value="10">Kamino</option>
          <option value="11">Geonosis</option>
          <option value="12">Utapau</option>
          </select>
          
        </div>

        <div className="flex flex-row items-center justify-center h-[40px]">
          <Image 
            src="icon-down-arrow.svg" 
            className="mr-2"
            width={8}
            height={8}
            alt="Icon Down Arrow"
          />
          Population
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
