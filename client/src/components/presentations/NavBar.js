import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../../assets/img/logo.png'
class NavBar extends React.Component {

  render() {
    return (
      <nav>
        <img src={logo} style={{width:'200px'}} />
        <Link to='/'>
          Home
        </Link>
        <Link to='/about'>
          About
        </Link>
      </nav>
    )
  }
}

export default NavBar;