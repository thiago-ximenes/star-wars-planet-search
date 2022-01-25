import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const tableHeaders = [
    'Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
    'Gravity', 'Terrain', 'Surface Water', 'Population', 'Created',
    'Edited', 'Films', 'url',
  ];
  const { data } = useContext(MyContext);
  return (
    <table
      className="border-solid
      border-gray-700 border-5"
    >
      <thead
        className="bg-gray-700 text-white border-2 border-red-300"
      >
        <tr>
          {tableHeaders.map((header) => (
            <th
              key={ header }
              className="border-x-2 border-5 p-3"
            >{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 && data.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>
              {planet.films.map((film) => (
                <span key={ film }>{film}</span>
              ))}

            </td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
