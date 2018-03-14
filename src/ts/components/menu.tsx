import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';

class MainMenu extends React.Component {

  render(){
    return (
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/posts">Posts</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/pages">Pages</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
      </ul>
    );
  }

}

export default MainMenu;