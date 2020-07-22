import React, { useEffect, Fragment } from "react";
import useFetch from "../../../hooks/useFetch";
import Feed from "../feed/feed";
import Pagination from "../pagination/pagination";
import { getPaginator, limit } from "../../../utils/utils";
import Loading from "../../loading";
import Errors from "../../errors";
import PopularTags from "../popularTags/popularTags";
import FeedToggler from "../feedToggler/feedToggler";

const GlobalFeed = ({ location, match }) => {
  const { currentPage, offset } = getPaginator(location.search);
  const apiUrl = `/articles?limit=${limit}&offset=${offset}`;
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);
  const url = match.url;

  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage]);
  error && console.log("response", error);
  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1>Medium</h1>
          <p>A place to share knowledge</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedToggler />
            {isLoading && <Loading />}
            {error && <Errors />}
            {!isLoading && response && (
              <Fragment>
                <Feed articles={response.articles} />
                <Pagination
                  paginationTotal={response.articlesCount}
                  limit={limit}
                  url={url}
                  currentPage={currentPage}
                />
              </Fragment>
            )}
          </div>
          <div className="col-md-3">
            <PopularTags />
          </div>
        </div>
      </div>
    </div>
  );
};
export default GlobalFeed;
