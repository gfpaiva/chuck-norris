import React, { useState, useEffect } from 'react';

import Card from '../../Components/Card';
import Grid from '../../Components/Grid';

import { getCategories } from '../../Utils/API';
import { getCategory } from '../../Utils/Categories';

import './Home.scss';

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getCategories();
        console.log('TCL: fetchCategories -> data', data);
        setCategories(data);
      } catch {
        console.error('Error on fetch categories');
      }
    }

    fetchCategories();
  }, []);

  return (
    <div className="home">
      <div className="home__categories">
        {categories && !!categories.length && (
          <Grid>
              {
                categories.map((category) => {
                  const { icon, content, link } = getCategory(category);

                  return (
                    <Card
                      className="home__category text-center px-0 py-4"
                      hover
                      key={content}
                      href={link}
                    >
                      <span className="home__category-icon">{icon}</span>
                      <br />
                      <span className="home__category-name">{content}</span>
                    </Card>
                  );
                })
              }
          </Grid>
        )}
      </div>
    </div>
  );
}
