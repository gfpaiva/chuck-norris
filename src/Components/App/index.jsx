import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from 'react-spinkit';

import Footer from '../Footer';
import Routes from '../../Utils/Routes';

import { useAppContext } from '../../Providers/App.Context';

import './App.scss';

export default function App() {
  const { loading } = useAppContext();

  if (loading) {
    return (
      <div className="app__loading full full--centered">
        <Spinner name="ball-pulse-sync" />
      </div>
    );
  }

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
