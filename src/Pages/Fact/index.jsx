import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaUndo } from 'react-icons/fa';

import FactsActions from '../../Store/facts/actions';

import Card from '../../Components/Card';
import CategoryGrid from '../../Components/CategoryGrid';

import { getCategory } from '../../Utils/Categories';

import './Fact.scss';

function Fact({
  match: { params: { category } },
  loadFactsRequest,
  factsClear,
  facts,
  loading,
}) {
  let detailCategory = getCategory(category);
  const { fact, error } = facts;

  const handleRefresh = (e) => {
    e.preventDefault();
    loadFactsRequest(category);
  };

  useEffect(() => {
    loadFactsRequest(category);
    detailCategory = getCategory(category);
    window.scrollTo(0, 0);
  }, [category]);

  useEffect(() => () => factsClear(), []);

  return (
    <div className="fact">
      <Link className="fact__back" to="/">
        <FaArrowLeft />
      </Link>

      {detailCategory && (
        <p>
          <strong>
            {detailCategory.icon}
            &nbsp;
            {detailCategory.content}
          </strong>
          &nbsp;
          - Chuck Norris Fact:
        </p>
      )}

      {error && (
        <h2 className="message message--error text-center">
          Ocorreu um erro ao recuperar os dados
          <span role="img" aria-label="Disappointed Face">😞</span>
        </h2>
      )}

      {loading && (
        <div className="text-center">
          <Spinner name="ball-pulse-sync" />
        </div>
      )}

      {Boolean(fact) && (
        <Card className={`fact__card animated faster ${loading ? 'zoomOut' : 'zoomIn'}`}>
          <div className="fact__card-content">

            <p className="fact__quote text-center">
              &quot;
              {fact}
              &quot;
            </p>

            <div className="text-right">
              <a
                className="fact__refresh"
                href="javascript"
                onClick={handleRefresh}
              >
                <FaUndo />
              </a>
            </div>
          </div>
        </Card>
      )}

      <div className="fact__categories">
        <p className="my-4">Navegue por outra categoria: </p>
        <CategoryGrid active={category} />
      </div>
    </div>
  );
}

Fact.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  loadFactsRequest: PropTypes.func.isRequired,
  factsClear: PropTypes.func.isRequired,
  facts: PropTypes.shape({
    fact: PropTypes.string,
    error: PropTypes.bool,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ app: { loading }, facts }) => ({ facts, loading });
const mapDispatchToProps = dispatch => bindActionCreators(FactsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Fact);
