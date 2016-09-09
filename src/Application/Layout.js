import React from 'react';
import Header from '../Header/Header';

const Layout = ({ children }) => (
  <div className="appRoot">
    <Header />
    <div className="container">{ children }</div>
  </div>
);

export default Layout;