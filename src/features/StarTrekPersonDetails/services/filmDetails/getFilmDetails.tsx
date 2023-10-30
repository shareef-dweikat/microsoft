import api from "../../../../axios";
import { Film } from "../../types";
import { getFilmDetailsEndPoint } from "../endpoints";
import toFilmDetails from "./model";

async function getFilmDetails(id: number) {
  const response = await api.get(getFilmDetailsEndPoint(id));
  const data: Film & { release_date: string } = await response.data;
  return toFilmDetails(data);
}

export default getFilmDetails;
