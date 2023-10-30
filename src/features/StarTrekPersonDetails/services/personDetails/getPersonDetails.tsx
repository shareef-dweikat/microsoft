import api from "../../../../axios";
import { JSONPersonCharacteristics } from "../../types";
import { getPersonDetailsEndPoint } from "../endpoints";
import toPersonDetails from "./model";

async function getPersonDetails(id: number) {
  const response = await api.get(getPersonDetailsEndPoint(id));
  const data: JSONPersonCharacteristics = await response.data;
  return toPersonDetails(data);
}

export default getPersonDetails;
