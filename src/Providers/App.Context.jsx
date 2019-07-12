import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export default function AppProvider({ children, initialState }) {
  const [loading, setLoading] = useState(initialState);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.defaultProps = {
  initialState: false,
};

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  initialState: PropTypes.bool,
};
