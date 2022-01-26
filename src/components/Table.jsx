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
    column, operator, value,
  },
  } = useContext(MyContext);
  return (
    <table
      className="border-solid
      border-gray-700 border-5"
    >
      <thead
        className="bg-gray-700 text-white border-2 border-red-300 p-2"
      >
        <tr>
          {tableHeaders.map((header) => (
            <th
              className="px-4 border-x-2"
              key={ header }
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 && data.map((planet) => {
          delete planet.residents;
          return planet;
        })
          .filter((planet) => planet.name.toLowerCase().includes(name))
          .filter((planet) => {
            if (operator === 'maior que') {
              return Number(planet[column]) > value;
            }
            if (operator === 'menor que') {
              return Number(planet[column]) < value;
            }
            return planet[column] === value;
          })
          .map((planet, index) => (
            <tr
              className={ `border-2 ${index % 2 === 1 && 'bg-gray-200'}` }
              key={ planet.name }
            >
              {Object.values(planet).map((value) => (
                <td
                  className="border-2 border-gray-700 p-2"
                  key={ value }
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
