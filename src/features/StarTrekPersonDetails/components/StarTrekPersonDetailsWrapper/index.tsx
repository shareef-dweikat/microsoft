import { StarTrekPersonFilmsTable } from "../";
import { StarTrekPersonCharacteristics } from "../";
import useApiData from "../../hooks/personHooks";
import styles from "./StarTrekPersonalDetails.module.css";
import { getIDFromURL } from "../../../../utils";
import { LOADING } from "../../constants";
import { Person } from "../../types";
import { Text } from "..";

function StarTrekPersonDetailsWrapper() {
  const {
    data,
    isLoading,
  }: { data: Person; isLoading: boolean; error: unknown } = useApiData();

  const personId = getIDFromURL(data.url);
  const createdDate = new Date(data.created).toDateString();

  if (isLoading) return <Text block>{LOADING}</Text>;

  return (
    <div id={styles.container}>
      <StarTrekPersonCharacteristics
        id={personId}
        gender={data.gender}
        name={data.name}
        height={data.height}
        hairColor={data.hairColor}
        created={createdDate}
      />
      <StarTrekPersonFilmsTable films={data.films} />
    </div>
  );
}

export default StarTrekPersonDetailsWrapper;
