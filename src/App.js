import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Order from './components/Dashboard/Order/Order';
import AddService from './components/Dashboard/AddService/AddService';
import AddReview from './components/Dashboard/AddReview/AddReview';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import OrderList from './components/Dashboard/OrderList/OrderList';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import AdminServiceList from './components/Dashboard/AddminServiceList/AdminServiceList';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute exact path='/dashboard/add-order'>
            <Order />
          </PrivateRoute>
          <PrivateRoute exact path='/dashboard/add-order/:id'>
            <Order />
          </PrivateRoute>
          <PrivateRoute exact path='/dashboard/add-service'>
            <AddService />
          </PrivateRoute>
          <PrivateRoute path='/dashboard/order-list'>
            <OrderList />
          </PrivateRoute>
          <PrivateRoute path='/dashboard/add-review'>
            <AddReview />
          </PrivateRoute>
          <PrivateRoute path='/dashboard/add-admin'>
            <AddAdmin />
          </PrivateRoute>
          <PrivateRoute path='/dashboard/admin-service-list'>
            <AdminServiceList/>
          </PrivateRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
