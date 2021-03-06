import React, { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import Loading from "../../loading";
import Errors from "../../errors";
import Tag from "../alltags/tags";

const Article = ({ match }) => {
  const slug = match.params.slug;
  const apiUrl = `/articles/${slug}`;
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);
  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <div className="article-page">
      <div className="banner">
        {!isLoading && response && (
          <div className="container">
            <h1>{response.article.title}</h1>
            <div className="article-meta">
              <Link to={`/profiles/${response.article.author.username}`}>
                <img src={response.article.author.image}></img>
              </Link>
              <div className="info">
                <Link to={`/profiles/${response.article.author.username}`}>
                  {response.article.author.username}
                </Link>
                <span className="data">{response.article.createdAt}</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="container page">
        {isLoading && <Loading />}
        {error && <Errors />}
        {!isLoading && response && (
          <div className="row article-content">
            <div className="col-xs-12">
              <div>
                <p>{response.article.body}</p>
              </div>
              <Tag tags={response.article.tagList} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Article;
