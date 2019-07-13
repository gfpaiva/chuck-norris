import React from 'react';

import CategoryGrid from '../../Components/CategoryGid';

import chuck from './chuck-norris-welcome.png';

import './Home.scss';

export default function Home() {
  return (
    <div className="home">
      <div className="home__welcome text-center">
        <img className="home__welcome-image full-width" src={chuck} alt="Chuck Norris" title="Chuck Norris" />

        <h1 className="home__welcome-title bg-secondary py-1">
          <span>Chuck Facts</span>
        </h1>

        <p className="home__welcome-text">Selecione uma das categorias abaixo para &quot;Chuck Facts&quot;</p>
      </div>
      <CategoryGrid />
    </div>
  );
}
