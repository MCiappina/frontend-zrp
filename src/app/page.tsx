'use client';

import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import PokemonInfo from '../components/PokemonInfo';
import ErrorComponent from '../components/ErrorComponent';

const Home: React.FC = () => {
  const [pokemon, setPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

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

    } catch (error) {
      console.log(error)
      setError(new Error('Something went wrong'));
    }
  };

  const handleSearch = async () => {
    setPokemonData(null);
    setError(null);
    await fetchData();
  }

  return (
    <div>
      <h1>Pokemon Search</h1>
      <Input
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
        placeholder="Enter Pokemon name"
      />
      <Button onClick={handleSearch}>Search</Button>
      {error && (<ErrorComponent error={error} />)}

      {pokemonData && (
        <PokemonInfo
          name={pokemonData.name}
          image={pokemonData.sprites.front_default}
          abilities={pokemonData.abilities.map((ability: any) => ability.ability.name)}
          types={pokemonData.types.map((type: any) => type.type.name)}
        />
      )}
    </div>
  );
};

export default Home;