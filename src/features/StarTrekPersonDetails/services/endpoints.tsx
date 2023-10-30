function getPersonDetailsEndPoint(id: number) {
  return `https://swapi.dev/api/people/${id}/.json`;
}

function getFilmDetailsEndPoint(id: number) {
  return `https://swapi.dev/api/films/${id}/.json`;
}

export { getPersonDetailsEndPoint, getFilmDetailsEndPoint };
