import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Pages = ({ page, url, currentPage }) => {
  const LiClasses = classNames({
    "page-item": true,
    active: currentPage === page,
  });

  return (
    <li className={LiClasses}>
      <Link to={`${url}?page=${page}`} className="page-link">
        {page}
      </Link>
    </li>
  );
};
export default Pages;
