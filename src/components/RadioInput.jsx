import PropTypes from 'prop-types';
import React from 'react';

function RadioInput({ value, onChange, orderByState, testid }) {
  return (
    <label htmlFor="radio">
      { value === 'ASC' ? 'Ascending' : 'Descending' }
      <input
        data-testid={ testid }
        checked={ orderByState === value }
        id="radio"
        type="radio"
        name="radio"
        value={ value }
        onChange={ (e) => { onChange(e.target.value); } }
      />
    </label>
  );
}

RadioInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  orderByState: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};

export default RadioInput;
