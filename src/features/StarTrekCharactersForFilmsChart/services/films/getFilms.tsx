import api from "../../../../axios";
import { Film } from "../../types";
import { getFilmsEndPoint } from "../endpoints";
import toFilms from "./model";

async function getFilms() {
  const response = await api.get(getFilmsEndPoint());
  const data: Film & {results: []} = await response.data;
  return toFilms(data);
}

export default getFilms;
