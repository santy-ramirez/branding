import React from 'react';
import './Header.css'
import logo from '../logo.svg'


class Header extends React.Component {
  render() {
    return (
      <div className="header__contenedor">
     
      <header>

        <img src={logo} alt=""/>
        <p>list tarea</p>
      </header>
    </div>
    );
  }
}

export default Header;