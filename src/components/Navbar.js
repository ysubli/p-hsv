import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ navigateTo, currentPage }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>HSV</h2>
      </div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
            className={currentPage === 'home' ? 'active' : ''}
          >
            Accueil
          </a>
        </li>
        <li className="navbar-item">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); navigateTo('prise'); }}
            className={currentPage === 'prise' ? 'active' : ''}
          >
            Prise de RDV
          </a>
        </li>
        <li className="navbar-item">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); navigateTo('suivi'); }}
            className={currentPage === 'suivi' ? 'active' : ''}
          >
            Suivi de RDV
          </a>
        </li>
        <li className="navbar-item">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); navigateTo('about'); }}
            className={currentPage === 'about' ? 'active' : ''}
          >
            À propos de nous
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
