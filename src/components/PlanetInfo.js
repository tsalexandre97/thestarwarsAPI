"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

const PlanetInfo = ({
  onBack,
  planetData,
  onEdit,
  onSaveEdit,
  onCancelEdit,
  editedName,
  setEditedName,
  editMode,
}) => {
  const { name, climate, terrain, population, films, residents, image } =
    planetData;

  return (
    <div className="flex flex-col">
    <div className="flex flex-col justify-start items-start w-[355px] lg:w-[592px] h-auto pb-8 px-[13px] lg:px-[30px] rounded-[10px] bg-white">
      <div className="flex flex-row w-full pl-[14.08px] mt-[31.08px] h-auto">
        <div className="flex relative w-[82px] h-[82px] flex-row">
          <Image src={image} fill alt={name} />
        </div>

        <div className={`${montserrat.className} flex flex-col lg:flex-row ml-[20px]`}>
          <div className="lg:mr-[40px]">
            <span className={`text-[14px] font-normal text-[#000]`}>Planet:</span>
            <h2 className={`text-[18px] font-black uppercase mb-[20px]`}>
              {editMode ? (
                <input
                className="flex min-w-[130px] w-[130px] outline-none"
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
              ) : (
                name
              )}
              <div className="text-[8px] font-light">
              {editMode ? (
                <>
                  <button onClick={onSaveEdit}>Salvar</button>
                  <button onClick={onCancelEdit}>Cancelar</button>
                </>
              ) : (
                <button onClick={onEdit}>Editar Nome</button>
              )}
              </div>
            </h2>
          </div>

          <div className={`flex flex-col w-full text-[14px]`}>
            <p className="flex w-full">
              <Image alt="icon" src="icon-climate.svg" width={18} height={18} />
              <span className="font-bold pl-[5.68px] pr-1">Clima:</span>{" "}
              <span className="font-normal">{climate}</span>
            </p>
            <p className="flex w-full">
              <Image alt="icon" src="icon-terrain.svg" width={18} height={18} />
              <span className="font-bold pl-[5.68px] pr-1">Terreno:</span>{" "}
              <span className="font-normal">{terrain}</span>
            </p>
            <p className="flex w-full">
              <Image
                alt="icon"
                src="icon-population.svg"
                width={18}
                height={18}
              />
              <span className="font-bold pl-[5.68px] pr-1">População:</span>{" "}
              <span className="font-normal">{population}</span>
            </p>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col w-full bg-[#F1F1F1] rounded-[8px] h-auto px-[16px] py-[14px] mt-[27px] ${montserrat.className}`}
      >
        <div className="flex flex-row w-full justify-start items-start">
          <Image src="icon-residents.svg" width={15} height={15} />
          <p className="text-[#000] text-[14px] font-bold pl-1">Residents:</p>
        </div>

        <span className="flex w-full h-[1px] bg-[#909090] mt-[6px]"></span>
        <p className="text-[14px] font-normal mt-1">
          {residents.map((res, index) => {
            const match = res.match(/\/(\d+)\/$/);
            const residentNumber = match ? match[1] : null;

            // Verifica se é o último elemento do array
            const isLastElement = index === residents.length - 1;

            // Adiciona vírgula se não for o último, caso contrário, ponto final
            return residentNumber
              ? `People ${residentNumber}${isLastElement ? "." : ","} `
              : null;
          })}
        </p>
      </div>

      <div
        className={`flex flex-col w-full bg-[#F1F1F1] rounded-[8px] h-auto px-[16px] py-[14px] mt-[9px] ${montserrat.className}`}
      >
        <div className="flex flex-row w-full justify-start items-start">
          <Image src="icon-residents.svg" width={15} height={15} />
          <p className="text-[#000] text-[14px] font-bold pl-1">Films:</p>
        </div>

        <span className="flex w-full h-[1px] bg-[#909090] mt-[6px]"></span>
        <p className="text-[14px] font-normal mt-1">
          {films.map((film, index) => {
            const match = film.match(/\/(\d+)\/$/);
            const filmNumber = match ? match[1] : null;

            // Verifica se é o último elemento do array
            const isLastElement = index === films.length - 1;

            // Adiciona vírgula se não for o último, caso contrário, ponto final
            return filmNumber
              ? `Films ${filmNumber}${isLastElement ? "." : ","} `
              : null;
          })}
        </p>
      </div>

      
    </div>
    <div className={`${montserrat.className} text-[14px] text-white font-normal flex w-full justify-end items-center mt-[37px]`}>
    <Image src="icon-left-arrow.svg" className="mr-3" width={7} height={11} /><button onClick={onBack}>Voltar</button>
    </div>
    </div>
  );
};

export default PlanetInfo;
