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
    <S.Card loaded={name ? true : false}>
      <S.Name>{name}</S.Name>
      <S.Image src={image} alt={name} />
      <S.Abilities>Abilities:</S.Abilities>
      <S.AbilitiesList >
        {abilities.map((ability, index) => (
          <S.AbilityItem key={index}>{ability}</S.AbilityItem>
        ))}
      </S.AbilitiesList>
      <S.Types>Types:</S.Types>
      <S.TypesList >
        {types.map((type, index) => (
          <S.TypeItem key={index}>{type}</S.TypeItem >
        ))}
      </S.TypesList >
    </S.Card>
  );
};

export default PokemonInfo;