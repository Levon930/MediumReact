import React, { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../loading";
import Errors from "../../errors";
import { Link } from "react-router-dom";

const PopularTags = () => {
  const [{ response, isLoading, error }, doFetch] = useFetch("/tags");
  useEffect(() => {
    doFetch();
  }, [doFetch]);

  if (isLoading || !response) {
    return <Loading />;
  }
  if (error) {
    return <Errors />;
  }
  const FullTags = response.tags.filter((item) => /^[a-zA-Z0-9]+$/.test(item));

  return (
    <div className="sidebar">
      <p>Popular tags</p>
      <div className="tag-list">
        {FullTags.map((tag) => {
          return (
            <Link
              to={`/tags/${tag}`}
              className="tag-default tag-pill"
              key={tag}
            >
              {tag}{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default PopularTags;
