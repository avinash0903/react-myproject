import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import employee from './components/Employee';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/employee" component={employee} />
    </Switch>
  </BrowserRouter>
);

export default Router;
