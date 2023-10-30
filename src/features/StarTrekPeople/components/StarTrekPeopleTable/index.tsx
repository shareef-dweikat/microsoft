/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./StarTrekPeopleTable.module.css";
import { Table } from "../";
import { getDetailsAnchorTag } from "../../utils";
import { People } from "../../types";
import { EYE_COLOR, GENDER, HEIGHT, NAME } from "../../constants";

type props = { people: People[] };

function StarTrekPeopleTable({ people }: props) {
  const data: { columns: string[]; rows: any } = {
    columns: [NAME, GENDER, HEIGHT, EYE_COLOR, ""],
    rows: people.map((person) => [
      person.name,
      person.gender,
      person.height,
      person.eyeColor,
      getDetailsAnchorTag(person.url),
    ]),
  };
  return (
    <div id={styles.container}>
      <Table data={data} />
    </div>
  );
}

export default StarTrekPeopleTable;
