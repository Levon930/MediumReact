import React from "react";
import { NumberIsArray } from "../../../utils/utils";
import Pages from "./pages";

const Pagination = ({ paginationTotal, limit, url, currentPage }) => {
  const pagesCount = Math.ceil(paginationTotal / limit);
  const pages = NumberIsArray(1, pagesCount);
  return (
    <ul className="pagination">
      {pages.map((el) => {
        return <Pages key={el} page={el} url={url} currentPage={currentPage} />;
      })}
    </ul>
  );
};
export default Pagination;
