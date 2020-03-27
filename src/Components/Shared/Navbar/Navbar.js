import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

class MyNavbar extends React.Component {
  render() {
    return (
      <div className="navbarBrand">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <img src="https://o.remove.bg/downloads/f039c08c-575e-48ec-9f60-4082189a8b88/corona-removebg-preview.png" width="50" height="30" class="d-inline-block align-top" alt="" />
            Covid-19 Tracker & Visualization
          </a>
          <li className="form-inline my-2 my-lg-0">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/countries">Countries</Link>
          </li>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
