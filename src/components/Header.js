import React from 'react';

const Header = ({ name }) => {
  return (
    <header>
      <h1>{name}</h1>
      <nav>
        <ul>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;