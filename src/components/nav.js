import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
  <nav className="main-nav">
    <ul>
      <li>
        <Link to="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link to="/blog">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link to="/experience">
          <a>Experience</a>
        </Link>
      </li>
      <li>
        <Link to="/portfolio">
          <a>Portfolio</a>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
