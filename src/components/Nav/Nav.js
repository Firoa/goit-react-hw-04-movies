import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
const activeStyle = {
  color: '#b8323d',
};
const Navigation = () => (
  <ul className={styles.list}>
    <li>
      <NavLink
        className={styles.navLink}
        to="/"
        exact
        activeStyle={activeStyle}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        className={styles.navLink}
        to="/movies"
        activeStyle={activeStyle}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
