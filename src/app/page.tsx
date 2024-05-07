'use client';

import React, { useState } from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import PokemonInfo from '../components/PokemonInfo/PokemonInfo';
import ErrorComponent from '../components/ErrorComponent/ErrorComponent';
import styled, { keyframes, createGlobalStyle } from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #333;
`;

export const Content = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 20px;
  background-color: #222;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: 'Pokemon', sans-serif;
  color: #ccc;
  transition: transform 0.3s ease;
`;

export const H1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 10px;
`;

const PokemonContainer = styled.div`
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Home: React.FC = () => {
  const [pokemon, setPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [showPokemonInfo, setShowPokemonInfo] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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
      setLoading(false)

    } catch (error) {
      console.log(error)
      setError(new Error('Something went wrong'));
      setLoading(false)
    }
  };

  const handleSearch = async () => {
    setPokemonData(null);
    setError(null);
    setShowPokemonInfo(false);
    setLoading(true);
    await fetchData();
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Content>
          <H1>Pokemon Search</H1>
          <InputContainer>
            <Input
              value={pokemon}
              onChange={(e) => setPokemon(e.target.value)}
              placeholder="Enter Pokemon name"
            />
            <Button onClick={handleSearch}>Search</Button>
          </InputContainer>
          {error && (<ErrorComponent error={error} />)}

          <PokemonContainer>
            {showPokemonInfo && (
              <PokemonInfo
                name={pokemonData.name}
                image={pokemonData.sprites.front_default}
                abilities={pokemonData.abilities.map((ability: any) => ability.ability.name)}
                types={pokemonData.types.map((type: any) => type.type.name)}
                loading={loading}
              />
            )}
          </PokemonContainer>
        </Content>
      </Container>
    </>
  );
};

export default Home;
