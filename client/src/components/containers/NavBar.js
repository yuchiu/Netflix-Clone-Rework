import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../../assets/img/logo.png'

class NavBar extends React.Component {

  render() {
    return (
      <nav>
        <ul>
          <img id="nav-logo" src={logo}/>
          <Link to='/'>
            Home
          </Link>
          <Link to='/about'>
            About
          </Link>
        </ul>
      </nav>
    )
  }
}

export default NavBar;