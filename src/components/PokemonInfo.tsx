import React from 'react';

interface PokemonInfoProps {
  name: string;
  image: string;
  abilities: string[];
  types: string[];
}

const PokemonInfo: React.FC<PokemonInfoProps> = ({
  name,
  image,
  abilities,
  types,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h3>Abilities:</h3>
      <ul>
        {abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
      <h3>Types:</h3>
      <ul>
        {types.map((type, index) => (
          <li key={index}>{type}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonInfo;