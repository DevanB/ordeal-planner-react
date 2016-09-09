import React from 'react';
import { Link } from 'react-router';

const PublicNavigation = () => (
  <div id="bs-example-navbar-collapse-1" className="collapse navbar-collapse">
    <ul className="nav navbar-nav navbar-right">
      <li className="" /* highlight login */>
        <Link to="/login">Login</Link>
      </li>
      <li className="" /* highlight signup */>
        <Link to="/signup">Sign Up</Link>
      </li>
    </ul>
  </div>
);

export default PublicNavigation;