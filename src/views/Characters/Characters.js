
import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState('');

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
      <h3>Characters</h3>
      {error && <p>{error}</p>}
      {characters.map((character) => (
        <p key={character.id}>{character.name}</p>
      ))}
    </div>
  );
}
