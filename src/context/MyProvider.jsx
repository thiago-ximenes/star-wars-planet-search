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
  const [filterByQuantity, setFilterByQuantity] = useState({
    filterByNumeric: [
      {
        column: '',
        operator: '',
        value: 0,
      },
    ],
  });
  const [optionFilter, setOptionFilter] = useState(
    ['population', 'orbital_period', 'diameter',
      'rotation_period', 'surface_water'],
  );

  return (
    <MyContext.Provider
      value={ {
        data,
        setData,
        filtered,
        setFilter,
        filterByQuantity,
        setFilterByQuantity,
        optionFilter,
        setOptionFilter,
      } }
    >
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
