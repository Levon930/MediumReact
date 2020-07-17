import React from "react";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { CurrentUserContext } from "../contexts/currentUserContext";
import { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const UserChecker = ({ children }) => {
  const [{ response }, doFetch] = useFetch("/user");
  const [currentUserState, setCurrentUserState] = useContext(
    CurrentUserContext
  );
  const [token] = useLocalStorage("token");

  useEffect(() => {
    if (!token) {
      setCurrentUserState((state) => ({
        ...state,
        isLoggedIn: false,
      }));
      return;
    }
    doFetch();
    setCurrentUserState((state) => ({
      ...state,
      isLoading: true,
    }));
  }, []);
  useEffect(() => {
    if (!response) {
      return;
    }
    setCurrentUserState((state) => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: response.user,
    }));
  }, [response, setCurrentUserState, doFetch]);

  return children;
};
export default UserChecker;
