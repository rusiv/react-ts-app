import React from 'react';

import Header from 'src/components/Header';
import NavBar from 'src/components/NavBar';
import Content from 'src/components/Content';
import Logo from 'src/components/Logo';

import './App.css';

function App() {
  return (
    <div className="main-wrapper">
      <div className="logo-wrapper">
        <Logo/>
      </div>
      <div className="header-wrapper">
        <Header/>
      </div>
      <div className="navbar-wrapper">
        <NavBar/>
      </div>
      <div className="content-wrapper">
        <Content/>
      </div>      
    </div>
  );
}

export default App;
