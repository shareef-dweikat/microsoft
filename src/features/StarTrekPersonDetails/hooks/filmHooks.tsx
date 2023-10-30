import { useState, useEffect } from "react";
import { getFilmDetails } from "../services/filmDetails";
import { Error, Film } from "../types";

function useApiData(films: string[] = []) {
  const [data, setData] = useState<Film[]>([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState<Error>(null);

  useEffect(() => {
    const fetchData = async () => {
      const requests = [];
      setisLoading(true);

      for (let i = 1; i <= films.length; i++) {
        requests.push(getFilmDetails(i));
      }

      try {
        const responses = await Promise.all(requests);
        setisLoading(false);
        setData(responses);
      } catch (error) {
        setError(error as Error)
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
}

export default useApiData;
