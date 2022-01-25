import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [data, setData] = useState({});
  const [filtered, setFilter] = useState({
    filterByName: {
      name: '',
    },
  });
  return (
    <MyContext.Provider value={ { data, setData, filtered, setFilter } }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
