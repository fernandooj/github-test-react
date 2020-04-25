// @flow weak

import React from "react";
import { Route, Switch } from "react-router";

import GitComponent from "../pages/listGits/gitsComponent";
import GitDetail    from "../pages/GitDetail/gitDetail";
 
  
const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/"      component={GitComponent} />
      <Route path="/detail/:id?" component={GitDetail} />
    </Switch>
  );
};

export default MainRoutes;
