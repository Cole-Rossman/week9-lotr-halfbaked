import React, { useEffect, useState } from 'react';
import { fetchFilms } from '../../services/films';

export default function Films() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const filmData = await fetchFilms();
        setFilms(filmData);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='film'>
      <h3>Films</h3>
      {error && <p>{error}</p>}
      {films.map((film) => (
        <p key={film.id}>{film.title}</p>
      ))}
    </div>
  );
}
