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
  } = useContext(MyContext);

  function filteredData() {
    let result = data.filter((planet) => planet.name.toLowerCase().includes(name));
    filterByNumeric.forEach((filter) => {
      const { column, operator, value } = filter;
      result = result.filter((planet) => {
        if (operator === 'maior que') {
          return Number(planet[column]) > value;
        } if (operator === 'menor que') {
          return Number(planet[column]) < value;
        } if (operator === 'igual a') {
          return Number(planet[column]) === value;
        }
        return planet;
      });
    });
    return result;
  }

  return (
    <table
      className="border-solid
      border-gray-700 border-5 m-2"
    >
      <thead
        className="bg-gray-700 text-white border-2 border-black p-2"
      >
        <tr>
          {tableHeaders.map((header, index) => (
            <th
              className={
                ` border px-4 py-2
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
      <tbody>
        {data.length > 0 && filteredData().map((planet, index) => (
          <tr
            className={ `border-2 ${index % 2 === 1 && 'bg-gray-200'}` }
            key={ planet.name }
          >
            {Object.values(planet).map((objValue) => (
              <td
                className="border-2 border-gray-700 p-2"
                key={ objValue }
              >
                {objValue}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
