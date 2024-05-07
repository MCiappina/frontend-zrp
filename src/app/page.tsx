'use client';

import React, { useState } from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import PokemonInfo from '../components/PokemonInfo/PokemonInfo';
import ErrorComponent from '../components/ErrorComponent/ErrorComponent';
import * as S from '../assets/page_style';

const Home: React.FC = () => {
  const [pokemon, setPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [showPokemonInfo, setShowPokemonInfo] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_POKE_API_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pokemon }),
      });

      const data = await response.json();
      setPokemonData(data);
      setError(null);
      setShowPokemonInfo(true);

    } catch (error) {
      console.log(error)
      setError(new Error('Something went wrong'));
    }
  };

  const handleSearch = async () => {
    setPokemonData(null);
    setError(null);
    setShowPokemonInfo(false);
    await fetchData();
  }

  return (
    <>
      <S.GlobalStyle />
      <S.Container>
        <S.Content>
          <S.H1>Pokemon Search</S.H1>
          <S.InputContainer>
            <Input
              value={pokemon}
              onChange={(e) => setPokemon(e.target.value)}
              placeholder="Enter Pokemon name"
            />
            <Button onClick={handleSearch}>Search</Button>
          </S.InputContainer>
          {error && (<ErrorComponent error={error} />)}

          <div>
            {showPokemonInfo && (
              <PokemonInfo
                name={pokemonData.name}
                image={pokemonData.sprites.front_default}
                abilities={pokemonData.abilities.map((ability: any) => ability.ability.name)}
                types={pokemonData.types.map((type: any) => type.type.name)}
              />
            )}
          </div>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Home;
