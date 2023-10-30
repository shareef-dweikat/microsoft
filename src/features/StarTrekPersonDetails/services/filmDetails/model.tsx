import { Film } from "../../types";

const toFilmDetails = (data: Film & { release_date: string }): Film => {
  return {
    title: data.title,
    director: data.director,
    releaseDate: data.release_date,
    characters: [],
  };
};

export default toFilmDetails;
