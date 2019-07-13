import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import { getCategories } from '../Utils/API';

export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export default function AppProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      setLoading(true);

      try {
        const data = await getCategories();
        setCategories(data);
      } catch {
        throw new Error('Error on fetch categories');
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        categories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
