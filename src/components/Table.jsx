import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { data } = useContext(MyContext);
  return (
    <table>
      <img src="https://wallpapercave.com/dwp1x/wp3614448.jpg" alt="start-wars" className="bg-none" />
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Films</th>
          <th>URL</th>
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
