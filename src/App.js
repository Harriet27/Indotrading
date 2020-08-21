import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home,
  LoginPage,
} from './Pages';
import { 
  SearchBar,
  Jumbotron,
  Carousel,
  Menu,
  Cart,
} from './Components';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/search" component={SearchBar} />
      <Route path="/jumbo" component={Jumbotron} />
      <Route path="/carousel" component={Carousel} />
      <Route path="/menu" component={Menu} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};

export default App;
