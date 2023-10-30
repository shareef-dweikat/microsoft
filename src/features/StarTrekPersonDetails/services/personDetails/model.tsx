import {  JSONPersonCharacteristics } from "../../types";

const toPersonDetails = (data: JSONPersonCharacteristics) => {
  return {
    name: data.name,
    height: data.height,
    gender: data.gender,
    hairColor: data.hair_color,
    created: data.created,
    url: data.url,
    films: data.films,
  };
};

export default toPersonDetails;
