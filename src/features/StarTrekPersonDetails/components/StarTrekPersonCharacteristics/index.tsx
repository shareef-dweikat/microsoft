import { PersonCharacteristics } from "../../types";
import styles from "./StarTrekPersonCharacteristics.module.css";
import { Text } from "../../components";
import {
  CREATED_DATE,
  GENDER,
  HAIR_COLOR,
  HEIGHT,
  ID,
  NAME,
} from "../../constants";


function StarTrekPersonCharacteristics({
  id,
  gender,
  name,
  height,
  hairColor,
  created,
}: PersonCharacteristics) {
  return (
    <div id={styles.characteristicsContainer}>
      <Text block>
        {ID} {id ?? ''}
      </Text>
      <Text block>
        {NAME} {name}
      </Text>
      <Text block>
        {GENDER} {gender}
      </Text>
      <Text block>
        {HEIGHT} {height}
      </Text>
      <Text block>
        {HAIR_COLOR} {hairColor}
      </Text>
      <Text block>
        {CREATED_DATE} {created}
      </Text>
    </div>
  );
}

export default StarTrekPersonCharacteristics;
