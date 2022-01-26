import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import Select from './Select';

function Form() {
  const { filtered: filterByName,
    setFilter, setFilterByQuantity, filterByQuantity } = useContext(MyContext);
  const optionFilter = ['Population', 'Orbital Period', 'Diameter',
    'Rotation Period', 'Surface Water'];
  const optionOperator = ['maior que', 'menor que', 'igual a'];
  return (
    <form
      className="flex items-center justify-center"
    >
      <input
        className="w-full m-2 p-2 border-2 border-gray-600
        placeholder-opacity-75 placeholder:italic"
        value={ filterByName.name }
        placeholder="Filter by name"
        onChange={ (e) => setFilter({
          filterByName: {
            name: e.target.value,
          },
        }) }
        type="text"
        data-testid="name-filter"
      />
      <Select
        options={ optionFilter }
        testid="column-filter"
        onChange={ (e) => setFilterByQuantity({
          column: e.target.value,
        }) }
      />
      <Select
        options={ optionOperator }
        testid="comparison-filter"
        onChange={ (e) => setFilterByQuantity({
          operator: e.target.value,
        }) }
      />
      <input
        value={ filterByQuantity.value }
        onChange={ ({ target: { value } }) => setFilterByQuantity({
          value,
        }) }
        type="number"
        data-testid="value-filter"
        className="w-fit m-2 p-2 border-2 border-gray-600
        placeholder-opacity-75 placeholder:italic"
        placeholder="Value"
      />
      <button
        className="w-fit m-1 px-5 py-2 border-2
        border-0 shadow-lg active:scale-90 duration-150
        bg-sky-500/100 hover:bg-sky-700 text-white rounded"
        data-testid="button-filter"
        type="button"
      >
        <div
          className="flex items-center justify-center"
        >
          Filter
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
        </div>
      </button>
    </form>
  );
}

export default Form;
