import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as firebase from 'firebase';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './Application/Layout';
import NotFound from './Application/NotFound';

import OrdealsList from './Ordeals/OrdealsList';

import Login from './Accounts/Login';
import Signup from './Accounts/Signup';
import RecoverPassword from './Accounts/RecoverPassword';
import ResetPassword from './Accounts/ResetPassword';

const config = {
  apiKey: "AIzaSyAT5yGQgqKy7c-H2ReCqhl0ClQcKRrjloM",
  authDomain: "ordeal-planner.firebaseapp.com",
  databaseURL: "https://ordeal-planner.firebaseio.com",
  storageBucket: "ordeal-planner.appspot.com",
};
firebase.initializeApp(config);

// const publicRoute = (nextState, replace) => {
//   if (null === firebase.auth().currentUser /* user not logged in*/) {
//     replace({
//       pathname: '/'
//     });
//   }
// };

// const authenticatedRoute = (nextState, replace) => {
//   if (null === firebase.auth().currentUser  user not logged in) {
//     replace({
//       pathname: '/login',
//       state: { nextPathName: nextState.location.pathname }
//     });
//   }
// };

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    browserHistory.push('/');
  } else {
    browserHistory.push('/');
  }
});

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={ Layout }>
      <IndexRoute component={ OrdealsList }/>
      <Route path="/login" component={ Login }/>
      <Route path="/signup" component={ Signup }/>
      <Route path="/recover-password" component={ RecoverPassword }/>
      <Route path="/reset-password/:token" component={ ResetPassword }/>
      <Route path="*" component={ NotFound }/>
    </Route>
  </Router>,
  document.getElementById('root')
);
