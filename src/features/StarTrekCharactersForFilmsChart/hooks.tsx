import { useState, useEffect } from "react";
import { getFilms } from "./services/films";
import { Error, ChartFilm } from "./types";

function useApiData() {
  const [films, setFilms] = useState<ChartFilm[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error>(null);

  async function fetchData() {
    setIsLoading(true);
    try {
      const results = await getFilms();
      setFilms(results);
    } catch (err: unknown) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { films, fetchData, isLoading, error };
}

export default useApiData;
