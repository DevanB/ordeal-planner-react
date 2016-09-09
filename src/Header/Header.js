import React from 'react';
import PublicNavigation from './PublicNavigation';
import AuthenticatedNavigation from './AuthenticatedNavigation';
import * as firebase from 'firebase';

const Header = React.createClass({
  getInitialState() {
    let user;
    firebase.auth().onAuthStateChanged(function(firebaseUser) {
      if (user) {
        user = firebaseUser;
      } else {
        user = null;
      }
    });
    return {
      user
    };
  },
  currentUserEmail() {
    return this.state.user.email;
  },
  handleLogout() {
    firebase.auth().signOut().then(function() {
      // Bert.alert('Successfully logged out.', 'success');
    }, function(error) {
      console.log(error);
    });
  },
  navigationItems() {
    if (!this.state.user) {
      return <PublicNavigation />;
    }
    return (
      <AuthenticatedNavigation
        currentUserEmail={ this.currentUserEmail() }
        handleLogout={ this.handleLogout }
      />
    );
  },
  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="index">Ordeal Planner</a>
          </div>
          { this.navigationItems() }
        </div>
      </nav>
    );
  }
});

export default Header;
