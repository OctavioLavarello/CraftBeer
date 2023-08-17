/// IMPORTS
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppState } from "../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";

// ACTIONS
import { logout } from "../../redux/actions/actions";
// STYLES
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  // GLOBAL STATE
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const { accessLogin } = useSelector((state: AppState) => state); 
  // HANDLERS
  const handlerLogout = () => {
    dispatch(logout())
    navigate("home")
  }
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
        {accessLogin.role === "Company" ? null : accessLogin.role === "Person" || accessLogin.role === "" ? 
        (
          <NavLink to="/cart" className={styles.link}>
            <h5>Cart</h5>
          </NavLink>
        ) : null
        }
        {accessLogin.role === "Person" ? null : accessLogin.role === "Company" ? 
        (
          <NavLink to="/post" className={styles.link}>
            <h5>Post beer</h5>
          </NavLink>
        ) : null
        }
        {!accessLogin.access ? //ES FALSE 
        (
          <NavLink to="/login" className={styles.link}>
            <h5>Login</h5>
          </NavLink> 
        ) : (accessLogin.role === "Person" ? 
        (
          <div>
            <button
            className={styles.link}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <h5>Menu</h5>
          </button>
          {showDropdown && (
            <div className={styles.dropdownContent}>
              <button 
              className={styles.link} 
              onClick={handlerLogout}
              >Logout</button>
              <NavLink to={`/user/${accessLogin.id}`} className={styles.link}>
                <h5>User</h5>
              </NavLink>
              <NavLink to="/myShop" className={styles.link}>
                <h5>My Purchases</h5>
              </NavLink>
              <button
              onClick={() => setShowDropdown(!showDropdown)}
              className={styles.link}>▲</button>
            </div>
          )}
          </div>
        ) : (accessLogin.role === "Company" ? (
          <div>
            <button
            className={styles.link}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <h5>Menu</h5>
          </button>
          {showDropdown && (
            <div className={styles.dropdownContent}>
              <h5 
              className={styles.link} 
              onClick={handlerLogout}
              >Logout</h5>
              <NavLink to={`/company/${accessLogin.id}`} className={styles.link}>
                <h5>Company</h5>
              </NavLink>
              <button
              onClick={() => setShowDropdown(!showDropdown)}
              className={styles.link}>▲</button>
            </div>
          )}
          </div>
        ) : null))
        }
      </div>
    </div>
  );
};
export default NavBar;
