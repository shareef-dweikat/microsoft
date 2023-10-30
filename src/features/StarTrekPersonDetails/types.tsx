import { Error, Film } from "../../types";

export type { Error, Film };

export type PersonCharacteristics = {
  name: string;
  gender: string;
  height: string;
  hairColor: string;
  created: string;
  id?: string;
};

export type JSONPersonCharacteristics = {
  name: string;
  gender: string;
  height: string;
  hair_Color: string;
  created: string;
  hair_color: string;
  url: string;
  id?: string;
  films: []
};

export type Person = {
  url: string;
  films: string[];
} & PersonCharacteristics;
