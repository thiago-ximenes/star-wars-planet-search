import PropTypes from 'prop-types';
import React from 'react';

function RadioInput({ value, onChange, orderByState, testid }) {
  return (
    <div
      className="relative w-full m-1"
    >
      <input
        data-testid={ testid }
        checked={ orderByState === value }
        id={ value }
        type="radio"
        name="radio"
        value={ value }
        className="hidden peer"
        onChange={ (e) => { onChange(e.target.value); } }
      />
      <label
        htmlFor={ value }
        className={ `
        flex gap-4 p-3 bg-gray-300 rounded-md bg-opacity-90
        backdrop-blur-2xl text-lg text-black
        hover:bg-opacity-50
        peer-checked:text-black
        transition font-['Stardos_Stencil']
        cursor-pointer` }
      >
        { value === 'ASC' ? 'Ascending' : 'Descending' }
      </label>

      <div
        className="flex absolute top-0 right-4 bottom-0 rounded-full
        bg-sky-500 w-7 h-7 my-auto scale-0 peer-checked:scale-100 transition
        delay-100"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto mx-auto text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </div>
  );
}

RadioInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  orderByState: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};

export default RadioInput;
