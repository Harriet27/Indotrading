import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home,
  LoginPage,
  RegisterPage,
} from './Pages';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={LoginPage} />
      <Route path='/register' component={RegisterPage} />
    </Switch>
  );
};

export default App;
