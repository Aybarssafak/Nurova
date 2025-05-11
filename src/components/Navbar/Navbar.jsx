import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">Nurova</a>
        </div>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#anasayfa" className="nav-link">Ana Sayfa</a>
          </li>
          <li className="nav-item">
            <a href="#hakkinda" className="nav-link">Hakkında</a>
          </li>
          <li className="nav-item">
            <a href="#urunler" className="nav-link">Ürünler</a>
          </li>
          <li className="nav-item">
            <a href="#blog" className="nav-link">Blog</a>
          </li>
          <li className="nav-item">
            <a href="#iletisim" className="nav-link">İletişim</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 