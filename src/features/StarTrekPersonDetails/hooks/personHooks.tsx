import { useState, useEffect } from "react";
import { getPersonDetails } from "../services/personDetails";
import { Person, Error } from "../types";

function useApiData() {
  const init = {
    id: "",
    name: "",
    height: "",
    gender: "",
    hairColor: "",
    created: "",
    url: "",
    films: []
  };

  const [data, setData] = useState<Person>(init);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error>(null);

  async function fetchData(id: number) {
    setIsLoading(true);
    try {
      const result = await getPersonDetails(id);
      setData(result);
    } catch (err: unknown) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData(1);
  }, []);

  return { data, isLoading, error };
}

export default useApiData;
