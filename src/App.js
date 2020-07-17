import React from "react";
import Routs from "./components/routes";
import { BrowserRouter as Router } from "react-router-dom";
import TopBar from "./components/pages/header/topBar";
import { CurrentUserProvider } from "./contexts/currentUserContext";
import UserChecker from "./hocs/userChecker";

function App() {
  return (
    <CurrentUserProvider>
      <UserChecker>
        <Router>
          <TopBar />
          <Routs />
        </Router>
      </UserChecker>
    </CurrentUserProvider>
  );
}

export default App;
