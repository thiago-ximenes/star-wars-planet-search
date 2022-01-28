import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const tableHeaders = [
    'Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
    'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films',
    'Created', 'Edited', 'url',
  ];
  const { data, filtered: {
    filterByName: { name },
  },
  filterByQuantity: {
    filterByNumeric,
  },
  orderBy,
  sortParameter,
  } = useContext(MyContext);

  function orderBySort(array) {
    if (orderBy) {
      if (orderBy === 'ASC') {
        return array.sort((a, b) => a[sortParameter] - b[sortParameter]);
      }
      return array.sort((a, b) => b[sortParameter] - a[sortParameter]);
    }
    return array.sort((a, b) => {
      const ONE = 1;
      const MINUS_ONE = -1;
      const fa = a.name;
      const fb = b.name;
      if (fa < fb) {
        return MINUS_ONE;
      }
      if (fa > fb) {
        return ONE;
      }
      return 0;
    });
  }

  function filteredData() {
    let result = data.map((planet) => {
      delete planet.residents;
      return planet;
    });
    result = data.filter((planet) => planet.name.toLowerCase().includes(name));
    filterByNumeric.forEach((filter) => {
      const { column, operator, value } = filter;
      result = result.filter((planet) => {
        if (operator === 'maior que') {
          return Number(planet[column]) > Number(value);
        } if (operator === 'menor que') {
          return Number(planet[column]) < Number(value);
        } if (operator === 'igual a') {
          return Number(planet[column]) === Number(value);
        }
        return planet;
      });
    });
    result = orderBySort(result);
    return result;
  }

  return (
    <div className="overflow-auto rounded-md m-3 shadow-md">
      <table
        className=" w-full
        border-gray-700 border-5"
      >
        <thead
          className="bg-gray-700 text-white border-2
          border-black font-semibold
          tracking-wide align-left"
        >
          <tr>
            {tableHeaders.map((header, index) => (
              <th
                className={
                  ` border p-3 text-left
                  ${index === 0 && 'border-r-2 border-white'}
                  ${index === tableHeaders.length - 1 && 'border-l-2 border-white'}}`
                }
                key={ header }
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody
          className="divide-y-8 divide-gray-700"
        >
          {data.length > 0 && filteredData().map((planet, index) => (
            <tr
              className={ `border-2 ${index % 2 === 1 && 'bg-gray-200'}` }
              key={ planet.name }
            >
              {Object.values(planet).map((objValue) => (
                <td
                  data-testid={ objValue === planet.name && 'planet-name' }
                  className="border-2 text-center
                  text-sm border-gray-700 p-2 whitespace-nowrap"
                  key={ objValue }
                >
                  {objValue}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
