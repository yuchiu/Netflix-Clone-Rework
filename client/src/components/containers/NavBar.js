import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../../../assets/img/logo.png";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              <img id="nav-logo" src={logo} />
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <SearchBar />
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/signin">SIGN IN</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
