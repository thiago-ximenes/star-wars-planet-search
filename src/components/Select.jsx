import PropTypes from 'prop-types';
import React from 'react';

function Select({ options, testid, onChange }) {
  return (
    <select
      defaultValue={ options.length > 0 && options[0] }
      data-testid={ testid }
      className="w-fit m-0.5 p-1.5 border-2 border-gray-600
      rounded text-center text-lg font-['Stardos_Stencil']"
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
