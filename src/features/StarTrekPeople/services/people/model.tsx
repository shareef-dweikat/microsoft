import { PeopleJSON, PersonDataSource } from "../../types";

const toPeople = (data: PeopleJSON): PersonDataSource => {
  const modeledResults = data.results.map((person: PeopleJSON) => ({
    name: person.name,
    created: person.created,
    eyeColor: person.eye_color,
    gender: person.gender,
    height: person.height,
    url: person.url,
  }));

  return {
    next: data.next,
    previous: data.previous,
    results: modeledResults,
    totalCount: data.count,
    currentPageSize: data.results.length,
  };
};

export default toPeople;
