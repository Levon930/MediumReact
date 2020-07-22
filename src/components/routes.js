import { Switch, Route } from "react-router-dom";
import React from "react";
import GlobalFeed from "./pages/globalFeed";
import Article from "./pages/article";
import Authentication from "./pages/authentication";
import TegFeed from "./pages/TagFeed";
import YourFeed from "./pages/yourFeed";

const Routs = () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact />
      <Route path="/feed" component={YourFeed} exact />
      <Route path="/tags/:slug" component={TegFeed} />
      <Route path="/login" component={Authentication} />
      <Route path="/register" component={Authentication} />
      <Route path="/articles/:slug" component={Article} />
    </Switch>
  );
};

export default Routs;
