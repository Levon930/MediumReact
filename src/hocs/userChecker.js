import React from "react";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { CurrentUserContext } from "../contexts/currentUserContext";
import { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const UserChecker = ({ children }) => {
  const [{ response }, doFetch] = useFetch("/user");
  const [cur, dispatch] = useContext(CurrentUserContext);
  const [token] = useLocalStorage("token");

  useEffect(() => {
    if (!token) {
      dispatch({ type: "SET_UNAUTHORIZED" });

      return;
    }
    doFetch();
    dispatch({ type: "LOADING" });
  }, []);
  useEffect(() => {
    if (!response) {
      return;
    }
    dispatch({ type: "SET_AUTHORIZED", payload: response.user });
  }, [response, dispatch]);

  return children;
};
export default UserChecker;
