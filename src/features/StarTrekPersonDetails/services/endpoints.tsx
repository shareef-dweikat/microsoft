function getPersonDetailsEndPoint(id: number) {
  return `/people/${id}/.json`;
}

function getFilmDetailsEndPoint(id: number) {
  return `/films/${id}/.json`;
}

export { getPersonDetailsEndPoint, getFilmDetailsEndPoint };
