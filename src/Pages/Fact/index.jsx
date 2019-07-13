import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaUndo } from 'react-icons/fa';

import Card from '../../Components/Card';
import CategoryGrid from '../../Components/CategoryGid';

import { getJoke } from '../../Utils/API';
import { getCategory } from '../../Utils/Categories';

import './Fact.scss';

let detailCategory;

export default function Fact({ match: { params: { category } } }) {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchJoke = async () => {
    setLoading(true);

    try {
      const { value } = await getJoke(category);

      setFact(value);
    } catch {
      setError(true);

      throw new Error('Error on fetch categories');
    } finally {
      setLoading(false);
    }
  };
  const handleRefresh = (e) => {
    e.preventDefault();
    fetchJoke();
  };

  useEffect(() => {
    setError(false);
    detailCategory = getCategory(category) ? getCategory(category) : { content: category, icon: '' };
    fetchJoke();
    window.scrollTo(0, 0);
  }, [category]);

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

      {!!fact && (
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
};
