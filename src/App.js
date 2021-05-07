import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';

import RestaurantList from './components/Homepage/RestaurantList/RestaurantList';
import Header from './components/Header/Header';


function App() {
  return (
    < div className="" >
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <RestaurantList></RestaurantList>
          </Route>
          <Route path="/home">
            <RestaurantList></RestaurantList>
          </Route>

          {/* <PrivateRoute path="/admin">

            <Admin></Admin>
          </PrivateRoute>

          <PrivateRoute exact path="/book">
            <Book></Book>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>*/}
          <Route path="*">
            {/* <NotFound></NotFound> */}
          </Route>

        </Switch>

      </Router>
    </div >
  );
}

export default App;
