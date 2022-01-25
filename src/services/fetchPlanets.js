export default async function fetchPlanets() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
}
