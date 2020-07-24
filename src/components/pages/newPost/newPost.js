import React, { useState, useEffect, useContext } from "react";
import PostForm from "../postForm/form";
import useFetch from "../../../hooks/useFetch";
import { Redirect } from "react-router-dom";
import { CurrentUserContext } from "../../../contexts/currentUserContext";
const NewPost = () => {
  const initialValues = {
    title: "",
    description: "",
    body: "",
    tagList: [],
  };
  const apiUrl = "/articles";
  const [{ response, error }, doFetch] = useFetch(apiUrl);
  const [isSuccessFullSubmit, setIsSuccessFullSubmit] = useState(false);

  const [{ isLoggedIn }] = useContext(CurrentUserContext);
  const onSubmit = (article) => {
    doFetch({
      method: "post",
      data: {
        article,
      },
    });
    console.log("dataForm", article);
  };
  useEffect(() => {
    if (!response) {
      return;
    }
    setIsSuccessFullSubmit(true);
  }, [response]);
  if (isLoggedIn === false) {
    return <Redirect to="/" exact />;
  }
  if (isSuccessFullSubmit) {
    return <Redirect to={`/articles/${response.article.slug}`} />;
  }
  return (
    <div>
      <PostForm
        errors={(error && error.errors) || []}
        onSubmit={onSubmit}
        initialValues={initialValues}
      />
    </div>
  );
};
export default NewPost;
