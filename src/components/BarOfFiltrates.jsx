import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function BarOfFiltrates() {
  const { filterByQuantity: { filterByNumeric },
    setFilterByQuantity, optionFilter, setOptionFilter } = useContext(MyContext);

  function handleClick(column) {
    setOptionFilter([...optionFilter, column]);
    const newFilterByNumeric = filterByNumeric.filter(
      (filter) => filter.column !== column,
    );
    if (newFilterByNumeric.length === 0) {
      setFilterByQuantity({
        filterByNumeric: [
          {
            column: '',
            operator: '',
            value: 0,
          },
        ],
      });
    } else {
      setFilterByQuantity({
        filterByNumeric: newFilterByNumeric,
      });
    }
  }

  return (
    filterByNumeric.length > 0 && (
      <div className="flex">
        { filterByNumeric[0].column !== '' && filterByNumeric.map((filter) => (
          <div key={ filter.column }>
            <div
              className="flex m-3 bg-gray-300 w-fit rounded-lg p-2"
              data-testid="filter"
            >
              {filter.column}
              <button
                className="pl-4"
                type="button"
                onClick={ () => handleClick(filter.column) }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 tracking-wider
                  rounded-lg bg-opacity-70
                  hover:bg-red-300 transition duration-200 active:scale-110"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0
                  01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1
                  1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  );
}

export default BarOfFiltrates;
