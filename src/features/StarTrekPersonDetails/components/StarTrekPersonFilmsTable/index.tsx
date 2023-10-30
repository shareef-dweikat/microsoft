import styles from "./StarTrekPersonFilmsTable.module.css";
import { Table, Text, Title } from "../";
import useApiData from "../../hooks/filmHooks";
import { Error, Film } from "../../types";
import { DIRECTOR, ERROR, LOADING, PERSON_FILMS, RELEASE_DATE, TITLE } from "../../constants";

type props = { films: string[] };
type state = { data: Film[]; isLoading: boolean; error: Error };

function StarTrekPersonFilmsTable({ films }: props) {
  const { data, isLoading, error }: state = useApiData(films);

  const tableData = {
    columns: [TITLE, DIRECTOR, RELEASE_DATE],
    rows: data.map((film: Film) => [
      film.title,
      film.director,
      film.releaseDate,
    ]),
  };

  if (error) {
    return (
      <div>
        {ERROR} {error?.message}
      </div>
    );
  }

  return (
    <div id={styles.container}>
      <Title id={styles.title}>{PERSON_FILMS}</Title>
      {isLoading ? <Text block>{LOADING}</Text> : <Table data={tableData} />}
    </div>
  );
}

export default StarTrekPersonFilmsTable;
