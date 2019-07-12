import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from '../Footer';

import Routes from '../../Utils/Routes';

import './App.scss';

export default function App() {
  return (
    <main className="app">
      <section className="app__content container py-3">
        <Switch>
          {Routes.map(route => (
            <Route {...route} />
          ))}
        </Switch>
      </section>
      <Footer />
    </main>
  );
}
