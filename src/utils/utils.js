import { parse } from "query-string";
export const NumberIsArray = (start, end) => {
  return [...Array(end).keys()].map((item) => {
    return item + start;
  });
};

export const limit = 10;

export const getPaginator = (search) => {
  const parsedSearch = parse(search);
  const currentPage = parsedSearch.page ? Number(parsedSearch.page) : 1;
  const offset = currentPage * 10 - limit;
  return { currentPage, offset };
};
