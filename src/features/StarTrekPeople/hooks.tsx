/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { getPeople } from "./services/people";
import { Error, PeopleDataSource } from "./types";

function useApiData() {
  const init = {
    next: '',
    previous: '',
    results: [],
    totalCount: 0,
    currentPageSize: 0,
  };
  const [data, setData] = useState<PeopleDataSource>(init);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error>(null);

  const fetchDataWithDebounce = useDebouncedCallback((page, searchValue) => {
    fetchData(page, searchValue);
  }, 500);

  async function fetchData(page: number, searchValue = "") {
    setIsLoading(true);
    try {
      const people: any = await getPeople(page, searchValue);
      setData(people);
    } catch (err) {
      console.error(err);
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData(1);
  }, []);

  return { data, fetchData, fetchDataWithDebounce, isLoading, error };
}

export default useApiData;
