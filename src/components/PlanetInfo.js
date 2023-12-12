"use client"
import React from 'react';

const PlanetInfo = ({ planetData, onEdit, onSaveEdit, onCancelEdit, editedName, setEditedName, editMode }) => {
  const { name, climate, terrain, population, films, residents, image } = planetData;

  return (
    <div>
      <img src={image} alt={name} />
      <h2>{editMode ? <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} /> : name}</h2>
      <p>Clima: {climate}</p>
      <p>Terreno: {terrain}</p>
      <p>População: {population}</p>
      <p>Filmes: {films.map((film) => film).join(', ')}</p>
      <p>Residentes: {residents.join(', ')}</p>
      {editMode ? (
        <>
          <button onClick={onSaveEdit}>Salvar</button>
          <button onClick={onCancelEdit}>Cancelar</button>
        </>
      ) : (
        <button onClick={onEdit}>Editar Nome</button>
      )}
    </div>
  );
};

export default PlanetInfo;
