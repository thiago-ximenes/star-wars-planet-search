import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Form() {
  const { filtered: filterByName, setFilter } = useContext(MyContext);
  return (
    <form>
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
    </form>
  );
}

export default Form;
