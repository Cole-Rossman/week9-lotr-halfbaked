
import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/characters';
import Filter from '../../components/Controls/Filter';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState('');
  const [races, setRaces] = useState('All');

  const options = ['All', 'Dwarf', 'Elf', 'Hobbit', 'Human', 'Maiar', 'Orc'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const characterData = await fetchCharacters('All');
        setCharacters(characterData);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);

  const filterCharacters = () => {
    const filtered = characters.filter((character) => character.race === races || races === 'All');
    return filtered;
  };

  return (
    <>
      <Filter options={options} callback={setRaces} />
      <div className='character'>
        <h1>Characters</h1>
        {error && <p>{error}</p>}
        {filterCharacters().map((character) => (
          <p key={character.id}>{character.name}</p>
        ))}
      </div>
    </>
  );
}
