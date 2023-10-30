import api from "../../../../axios";
import { PeopleJSON } from "../../types";
import { getPeopleEndPoint } from "../endpoints";
import toPeople from "./model";

async function getPeople(page: number, searchValue = "") {
  const response = await api.get(getPeopleEndPoint(page, searchValue));
  const data: PeopleJSON = await response.data;
  return toPeople(data);
}

export default getPeople;
