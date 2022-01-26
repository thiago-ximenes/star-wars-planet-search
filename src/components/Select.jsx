import PropTypes from 'prop-types';
import React from 'react';

function Select({ options, testid, onChange }) {
  return (
    <select
      data-testid={ testid }
      className="w-fit m-0.5 p-2 border-2 border-gray-600"
      onChange={ onChange }
    >
      {options.map((option) => (
        <option
          key={ option }
          value={ option }
        >
          {option}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  testid: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
