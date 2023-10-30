function getPeopleEndPoint(page: number, searchValue: string) {
  return `/people/.json?page=${page}&&search=${searchValue}`;
}

export { getPeopleEndPoint };
