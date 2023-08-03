/// IMPORTS
import React from "react";
import { NavLink } from "react-router-dom";
// STYLES
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.RouterConteiner}>
        <NavLink to="/home" className={styles.link}>
          <h3>Home</h3>
        </NavLink>
        <NavLink to="/shop" className={styles.link}>
          <h3>Shop</h3>
        </NavLink>
        <NavLink to="/aboutUs" className={styles.link}>
          <h3>About us</h3>
        </NavLink>
        <NavLink to="/contact" className={styles.link}>
          <h3>Contact</h3>
        </NavLink>
      </div>
      <div className={styles.RouterConteiner}>
        <NavLink to="/cart" className={styles.link}>
          <h3>Cart</h3>
        </NavLink>
        <NavLink to="/login" className={styles.link}>
          <h3>Login</h3>
        </NavLink>
      </div>
    </div>
  );
};
export default NavBar;
