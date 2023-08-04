///IMPORTS
import React from "react";
import { NavLink } from "react-router-dom";
// STYLES
import styles from "./AboutUs.module.css"
import img from "../../assets/img/AboutUs.png"

const AboutUs: React.FC = () => {
    return (
        <div className={styles.all}>
          <div className={styles.containerP}>
            <h2>About Us...</h2>
            <p>Lorem ipsum dolor sit amet 
              consectetur adipisicing elit.
              Distinctio inventore saepe necessitatibus consequatur, 
              laborum nesciunt, harum fugit unde quibusdam vero sed iusto libero soluta! Sed,
              necessitatibus? Ipsa dicta error deleniti!
            </p>
            <p>Lorem ipsum dolor sit amet 
              consectetur adipisicing elit.
              Distinctio inventore saepe necessitatibus consequatur, 
              laborum nesciunt, harum fugit unde quibusdam vero sed iusto libero soluta! Sed,
              necessitatibus? Ipsa dicta error deleniti!
            </p>
            <div className={styles.accounts}>
              <div>
                <NavLink to ="">
                  <img src="" alt="ELY" />
                </NavLink>
                <NavLink to ="">
                  <img src="" alt="GERMAN" />
                </NavLink>
                <NavLink to ="">
                  <img src="" alt="AGUS" />
                </NavLink>
                <NavLink to ="">
                  <img src="" alt="OCTA" />
                </NavLink>
              </div>
              <div>
                <NavLink to ="">
                  <img src="" alt="ALEX" />
                </NavLink>
                <NavLink to ="">
                  <img src="" alt="JORGE" />
                </NavLink>
                <NavLink to ="">
                  <img src="" alt="LICED" />
                </NavLink>
                <NavLink to ="">
                  <img src="" alt="GAL" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <img src={img} alt="CraftBeer" className={styles.img}/>
          </div>
        </div>
    )
}

export default AboutUs