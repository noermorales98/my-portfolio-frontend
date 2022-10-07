import React from "react";
import './Header.css';
import logo from "../img/logo.png";
import menu from './menu.svg';
import close from './close.svg';

function Header() {
    return (
        <nav className="Header nav container sticky top-0" id="nav">
        <a href="/" className="nav__logo">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <ul className="nav__links">
          <li className="nav__item">
            <a href="/" className="nav__link">Inicio</a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">Blog</a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">Acerca de</a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">Contacto</a>
          </li>
        </ul>
        <a href="#nav" className="nav__hamburguer">
          <img src={menu} className="nav__icon" alt="menu" />
        </a>
        <a href="#" className="nav__close z-10">
          <img src={close} className="nav__icon" alt="menu" />
        </a>
      </nav>
    );
}


export default Header;