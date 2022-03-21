import React from 'react';
import { NavLink } from 'react-router-dom';


export default function NavHeader() {
  return (
    <div className='header'>
      <ul>
        <li>
          <NavLink exact to="/">
              Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/books">
              Books
          </NavLink>
        </li>
        <li>
          <NavLink to="/characters">
              Characters
          </NavLink>
        </li>
        <li>
          <NavLink to="/films">
              Films
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
