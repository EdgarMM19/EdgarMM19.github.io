import React from 'react';
import './Header.css';

const Header = ({ currentPage }) => {
  return (
    <div className="head">
      <header className="subhead">
        <h1 className="page-title">Edgar Moreno Martinez</h1>
        <p className="contact-links">
          <a href="mailto:edgarmm19@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
          <a href="resources/CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
          <a href="https://github.com/EdgarMM19" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://www.linkedin.com/in/edgar-moreno-martinez-mcs" target="_blank" rel="noopener noreferrer">Linkedin</a>
        </p>
        <nav className="navbar">
          <a href="/" className={`nav-item ${currentPage === 'about' ? 'current' : ''}`}>About Me</a>
          <a href="/misc" className={`nav-item ${currentPage === 'misc' ? 'current' : ''}`}>Misc</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
