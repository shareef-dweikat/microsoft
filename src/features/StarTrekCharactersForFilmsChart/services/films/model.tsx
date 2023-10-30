import {ChartFilm, Film} from '../../types'

const toFilms = (data: Film & {results: []}): ChartFilm[] => {
  const modeledResults: ChartFilm[] = data.results.map((film: Film) => ({
    title: film.title,
    charactersCount: film.characters.length,
  }));

  return modeledResults

};

export default toFilms;
