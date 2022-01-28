import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';
import RadioInput from './RadioInput';
import Select from './Select';

function FormOrdering() {
  const { setSortParameter, setOrderBy } = useContext(MyContext);
  const orderBy = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  const [orderByState, setOrderByState] = useState();
  const [sortParameter, setSortParameterState] = useState('population');

  return (
    <form>
      <Select
        options={ orderBy }
        testid="column-sort"
        onChange={ (e) => setSortParameterState(e.target.value) }
      />
      <RadioInput
        orderByState={ orderByState }
        value="ASC"
        testid="column-sort-input-asc"
        onChange={ () => setOrderByState('ASC') }
      />
      <RadioInput
        orderByState={ orderByState }
        value="DESC"
        testid="column-sort-input-desc"
        onChange={ () => setOrderByState('DESC') }
      />
      <button
        type="button"
        className="w-fit m-1 px-5 py-2 border-2
        border-0 shadow-lg active:scale-90 duration-150
        bg-sky-500/100 hover:bg-sky-700 text-white rounded font-['Stardos_Stencil']"
        data-testid="column-sort-button"
        onClick={ () => {
          setSortParameter(sortParameter);
          setOrderBy(orderByState);
        } }
      >
        <div
          className="flex items-center justify-center
          text-lg font-['Stardos_Stencil']"
        >
          Order
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
        </div>
      </button>
    </form>
  );
}

export default FormOrdering;
