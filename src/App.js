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
import RestaurantDetails from './components/Restaurant/RestaurantDetails/RestaurantDetails';
import ReviewItems from './components/Review/ReviewItems/ReviewItems';
import Login from './components/Login/Login';

export const UserContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartLength, setCartLength] = useState(0);
  return (
    <UserContext.Provider value={{ value1: [cart, setCart], value2: [cartOpen, setCartOpen], value3: [cartLength, setCartLength] }}>
      <Router>
        {/* <Header></Header> */}
        <Switch>

          <Route exact path="/">
            <RestaurantList></RestaurantList>
          </Route>
          <Route path="/home">
            <RestaurantList></RestaurantList>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/review">
            <ReviewItems></ReviewItems>
          </Route>
          <Route path="/restaurant/:id">
            <RestaurantDetails></RestaurantDetails>
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
    </UserContext.Provider>
  );
}

export default App;
