import React from 'react';
import * as S from './style';


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
    <S.PokemonInfoContainer>
      <h2>{name}</h2>
      <S.Image src={image} alt={name} />
      <h3>Abilities:</h3>
      <S.AbilitiesList >
        {abilities.map((ability, index) => (
          <S.AbilityItem key={index}>{ability}</S.AbilityItem>
        ))}
      </S.AbilitiesList>
      <h3>Types:</h3>
      <S.TypesList >
        {types.map((type, index) => (
          <S.TypeItem key={index}>{type}</S.TypeItem >
        ))}
      </S.TypesList >
    </S.PokemonInfoContainer>
  );
};

export default PokemonInfo;