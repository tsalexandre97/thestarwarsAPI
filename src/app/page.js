"use client";
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import PlanetInfo from "../components/PlanetInfo";
import Footer from "../components/Footer";
import Image from "next/image";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

const API_URL = "https://swapi.dev/api/planets/";
const IMAGE_URLS = [
  "https://cryptospro.com.br/planetas/planeta_0000_tatooine.png",
  "https://cryptospro.com.br/planetas/planeta_0001_naboo.png",
  "https://cryptospro.com.br/planetas/planeta_0002_mustafar.png",
  "https://cryptospro.com.br/planetas/planeta_0003_kashyyyk.png",
  "https://cryptospro.com.br/planetas/planeta_0004_hoth.png",
  "https://cryptospro.com.br/planetas/planeta_0005_endor.png",
  "https://cryptospro.com.br/planetas/planeta_0006_dagobah.png",
  "https://cryptospro.com.br/planetas/planeta_0007_coruscant.png",
  "https://cryptospro.com.br/planetas/planeta_0008_bespin.png",
  "https://cryptospro.com.br/planetas/planeta_0009_alderaan.png",
];

export default function Home() {
  const [planetData, setPlanetData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  const fetchPlanetData = async (searchTerm) => {
    try {
      const response = await fetch(`${API_URL}?search=${searchTerm}`);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }

      const data = await response.json();
      const planet = data.results[0];
      const image = IMAGE_URLS[parseInt(planet.url.split("/").reverse()[1], 10)];
      setPlanetData({ ...planet, image });
      setSearchClicked(true);
    } catch (error) {
      console.error("Error fetching planet data", error);
    }
  };

  const handleSearch = (searchTerm) => {
    fetchPlanetData(searchTerm);
  };

  const handleBack = () => {
    setSearchClicked(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSaveEdit = () => {
    setPlanetData((prevData) => ({ ...prevData, name: editedName }));
    setEditMode(false);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    // Se o usuário cancelar a edição, o nome editado deve voltar ao original
    setEditedName(planetData.name);
  };


  return (
    <>
    <div className="flex flex-col w-[300px] lg:w-[800px] items-center mt-[72px]">
      <div className="mb-[37.25px]">
        <Image
          src="/sw-logo.svg"
          width={209.26}
          height={210}
          alt="Star Wars - Planet Search"
        />
      </div>

      {searchClicked && planetData ? (
          <PlanetInfo
            planetData={planetData}
            onEdit={handleEdit}
            onSaveEdit={handleSaveEdit}
            onCancelEdit={handleCancelEdit}
            editedName={editedName}
            setEditedName={setEditedName}
            editMode={editMode}
            onBack={handleBack}
          />
        ) : (
        <div
          className="componenteInicial flex flex-col lg:flex-row justify-start items-start w-[300px] lg:w-[800px] pb-8 lg:pb-0 mx-[7.5px] rounded-[10px]"
          style={{ background: "rgba(0, 0, 0, 0.70)" }}
        >
          <div className="flex justify-start w-full h-[220px] lg:h-[400px] relative">
            <Image
              className="absolute rounded-[7.5px] lg:hidden"
              src="/mars.svg"
              width={300}
              height={300}
              alt="Star Wars - Planet Search"
            />
            <Image
              className="rounded-[7.5px] hidden lg:block object-cover"
              src="/mars.svg"
              fill
              alt="Star Wars - Planet Search"
            />
            <Image
              className="absolute z-50 right-[-60px] top-[38px] lg:left-[-60px] 
              lg:top-[280px]"
              src="/spaceship-2.png"
              width={285}
              height={229}
              alt="Star Wars - Planet Search"
            />
          </div>

          <div className="flex flex-col lg:justify-center lg:h-[400px] lg:items-center w-full px-4 mt-4 lg:mt-0 lg:px-[45px]">
            <p
              className={`text-white w-full text-center text-[18px] font-normal leading-normal h-[97px] pt-2 lg:px-8 ${montserrat.className}`}
            >
              Discover all the information about Planets of the Star Wars Saga
            </p>
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      )}

      

    </div>
      <Footer />
      </>
  );
}
