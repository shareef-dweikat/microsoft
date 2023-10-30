import { useState } from "react";
import styles from "./StarTrekPeopleWrapper.module.css";
import { StarTrekPeopleTable, Title } from "..";
import { StarTrekSearchBox } from "..";
import useApiData from "../../hooks";
import { Pagination } from "..";
import { NavLink } from "react-router-dom";
import { DebouncedState } from "use-debounce";
import { Error, People } from "../../types";
import { Text } from "../../components";
import {
  CHART_TITLE,
  ERROR,
  LOADING,
  SEARCH_LABEL,
  SEARCH_PLACEHOLDER,
  TITLE,
} from "../../constants";

type data = {
  next: string;
  previous: string;
  results: People[] | undefined;
  currentPageSize: number;
  totalCount: number;
};

type state = {
  data: data;
  fetchData: (page: number, searchValue?: string) => Promise<void>;
  fetchDataWithDebounce: DebouncedState<
    (page: number, searchValue: string) => void
  >;
  isLoading: boolean;
  error: Error;
};

function StarTrekPeople() {
  const [searchValue, setSearchValue] = useState<string>("");

  const { data, isLoading, fetchData, error, fetchDataWithDebounce }: state =
    useApiData();

  const people: People[] = data.results ?? [];

  if (error) {
    return <Text block>{ERROR} {error?.message}</Text>;
  }

  return (
    <>
      <Title id={styles.title}>{TITLE}</Title>
      <StarTrekSearchBox
        placeholder={SEARCH_PLACEHOLDER}
        label={SEARCH_LABEL}
        searchValue={searchValue}
        fetchData={fetchDataWithDebounce}
        setSearchValue={setSearchValue}
      />
      {isLoading ? (
        <Text block id={styles.loader}>
          {LOADING}
        </Text>
      ) : (
        <StarTrekPeopleTable people={people} />
      )}
      <div id={styles.paginationContainer}>
        <Pagination
          dataCount={data.totalCount}
          currentPageSize={data.currentPageSize}
          key={searchValue.length}
          fetchData={(page: number) => fetchData(page, searchValue)}
        />
      </div>
      <NavLink to="/chart">{CHART_TITLE}</NavLink>
    </>
  );
}

export default StarTrekPeople;
