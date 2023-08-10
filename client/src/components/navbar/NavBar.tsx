/// IMPORTS
import React from "react";
import { NavLink } from "react-router-dom";
import { AppState } from "../../redux/reducer";
import { useSelector } from "react-redux";
// STYLES
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  // GLOBAL STATE
  const { access } = useSelector((state: AppState) => state) 
  return (
    <div className={styles.navContainer}>
      <div className={styles.RouterConteiner}>
        <NavLink to="/home" className={styles.link}>
          <h5>Home</h5>
        </NavLink>
        <NavLink to="/shop" className={styles.link}>
          <h5>Shop</h5>
        </NavLink>
        <NavLink to="/aboutUs" className={styles.link}>
          <h5>About us</h5>
        </NavLink>
        <NavLink to="/contact" className={styles.link}>
          <h5>Contact</h5>
        </NavLink>
      </div>
      <div className={styles.RouterConteiner}>
        <NavLink to="/cart" className={styles.link}>
          <h5>Cart</h5>
        </NavLink>
        {!access ? 
        (
          <NavLink to="/login" className={styles.link}>
            <h5>Login</h5>
          </NavLink> 
        ) : 
        (
          <NavLink to="/post" className={styles.link}>
          <h5>Post beer</h5>
          </NavLink> 
          )
        }
      </div>
    </div>
  );
};
export default NavBar;
