import { Error, Film } from "../../types";

export type { Error, Film };

export type People = {
  name: string;
  gender: string;
  height: string;
  created: string;
  eyeColor: string;
  url: string;
  next: string;
  previous: string;
  results: People[];
  totalCount: number;
  currentPageSize: number;
};

export type PeopleDataSource = {
  next: string;
  previous: string;
  results: People[];
  totalCount: number;
  currentPageSize: number;
};

export type PeopleJSON = {
  name: string;
  gender: string;
  height: string;
  created: string;
  eye_color: string;
  url: string;
  next: string;
  previous: string;
  results: [];
  count: number;
};


export type Person = {
  name: string;
  created: string;
  eyeColor: string;
  gender: string;
  height: string;
  url: string;
};

export type PersonDataSource = {
  next: string;
  previous: string;
  results: Person[];
  totalCount: number;
  currentPageSize: number;
}
