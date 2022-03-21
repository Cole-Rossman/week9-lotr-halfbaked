
import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState('');

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

  return (
    <div className='character'>
      <h1>Characters</h1>
      {error && <p>{error}</p>}
      {characters.map((character) => (
        <p key={character.id}>{character.name}</p>
      ))}
    </div>
  );
}
