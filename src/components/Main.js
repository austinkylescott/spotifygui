import React from "react";
import Categories from "./Categories";
import { Switch, Route } from "react-router-dom";
import PlaylistPage from "./pages/PlaylistPage";

const Main = () => {
  return (
    <div className="main">
      <div className="upperNav">DUMMY TEXT</div>
      <div className="mainContent">
        <Switch>
          <Route path="/" exact component={Categories}></Route>
          <Route path="/search">Search</Route>
          <Route path="/library">Your Library</Route>
          <Route path="/playlist/:id" component={PlaylistPage}></Route>
        </Switch>
      </div>
    </div>
  );
};
export default Main;
