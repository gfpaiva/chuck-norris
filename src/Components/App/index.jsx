import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';

import CategoriesActions from '../../Store/categories/actions';

import Footer from '../Footer';
import Routes from '../../Utils/Routes';

import './App.scss';

function App({ categories, loading, loadCategoriesRequest }) {
  useEffect(() => {
    loadCategoriesRequest();
  }, []);

  if (!categories.length && loading) {
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

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  loadCategoriesRequest: PropTypes.func.isRequired,
};

const mapStateToProps = ({ app: { loading }, categories: { categories } }) => ({ loading, categories });
const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
