import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.nav-menu') && !event.target.closest('.menu-icon')) {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
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
            <a href="#anasayfa" className="nav-link" onClick={handleLinkClick}>Ana Sayfa</a>
          </li>
          <li className="nav-item">
            <a href="#hakkinda" className="nav-link" onClick={handleLinkClick}>Hakkında</a>
          </li>
          <li className="nav-item">
            <a href="#urunler" className="nav-link" onClick={handleLinkClick}>Ürünler</a>
          </li>
          <li className="nav-item">
            <a href="#blog" className="nav-link" onClick={handleLinkClick}>Blog</a>
          </li>
          <li className="nav-item">
            <a href="#iletisim" className="nav-link" onClick={handleLinkClick}>İletişim</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 