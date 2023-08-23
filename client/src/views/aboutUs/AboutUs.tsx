///IMPORTS
import React from "react";
import { NavLink } from "react-router-dom";
// STYLES
import styles from "./AboutUs.module.css"
import img from "../../assets/img/AboutUs.png"
// US
import ely from "../../assets/us/ely.jpg"
import german from "../../assets/us/ger.jpg"
import agustin from "../../assets/us/agus.jpg"
import octavio from "../../assets/us/octavio.png"
import ale from "../../assets/us/ale.jpg"
import jorge from "../../assets/us/jorge.jpg"
import liced from "../../assets/us/liced.jpg"
import jose from "../../assets/us/jose.jpg"

const AboutUs: React.FC = () => {
  return (
    <div>
      <div className={styles.all}>
        <div className={styles.containerP}>
          <h2>About Us...</h2>
          <p>
            In this exciting project, eight colleagues who are passionate about beer and creativity
            joined forces to create a meeting point for craft beer brands and lovers of this exquisite beverage. 
            and lovers of this exquisite beverage. Our mission is to offer our customers 
            a unique experience by accessing a wide selection of craft beers from different brands, brewed with dedication 
            of different brands, brewed with dedication and love!
          </p>
          <p>
            We are a virtual space where small and renowned craft beer brands come together to showcase their products and share their history. 
            come together to showcase their products and share their story. 
            We believe in the power of the brewing community and are committed to supporting independent brewers and their passion for quality. 
            to supporting independent brewers and their passion for quality.
          </p>
          <p>
            Our online store is a corner where you can explore and discover new flavors, learn about the latest
            discover new flavors, learn about the latest news in the world of beer and, above all, enjoy the experience of
            the experience of buying unique and special beers.
          </p>
          <p>
            So, if you're a craft beer lover, you're in the right place.
            Explore our selection, immerse yourself in the fascinating world of unique beers and join us on this
            and join us on this exciting beer journey.
          </p>
          <NavLink to="/home"
          className={styles.letsGo}>
            <button className={styles.link}>Lets Go...</button>
          </NavLink>
        </div>
        <div className={styles.container2}>
          <img src={img} alt="CraftBeer" className={styles.img}/>
        </div>
      </div>
      <div className={styles.linkedAccounts}>
        <h2>Our personal networks</h2>
        <div className={styles.accountsContainer}>
          <div className={styles.accounts}>
            <NavLink 
            className={styles.nav}
            to ="https://www.linkedin.com/in/ely-samuel-guaimacuto-090753137/"
            target="_blank">
              <img 
              className={styles.perfileImg}
              src={ely} alt="ELY" />
              <h4>Ely Samuel Guaimacuto</h4>
            </NavLink>
            <NavLink 
            className={styles.nav}
            to ="https://www.linkedin.com/in/german-conil-2220b195/"
            target="_blank">
              <img 
              className={styles.perfileImg}
              src={german} alt="GERMAN" />
              <h4>German Conil</h4>
            </NavLink>
            <NavLink 
            className={styles.nav}
            to ="https://www.linkedin.com/in/agustin-rosa-37ab2a26a/"
            target="_blank">
              <img 
              className={styles.perfileImg}
              src={agustin} alt="AGUS" />
              <h4>Agustin Rosa</h4>
            </NavLink>
            <NavLink 
            className={styles.nav}
            to ="https://www.linkedin.com/in/octavio-lavarello-175342271/"
            target="_blank">
              <img 
              className={styles.perfileImg}
              src={octavio} alt="OCTA" />
              <h4>Octavio Eneas Lavarello</h4>
            </NavLink>
          </div>
          <div className={styles.accounts}>
            <NavLink 
            className={styles.nav}
            to ="https://www.linkedin.com/in/alexis-david-weber/"
            target="_blank">
              <img 
              className={styles.perfileImg}
              src={ale} alt="ALEX" />
              <h4>Alexis David Weber</h4>
            </NavLink>
            <NavLink 
            className={styles.nav}
            to ="https://www.linkedin.com/in/jorge-enrique-acosta-de-le%C3%B3n-8934a4122/"
            target="_blank">
              <img 
              className={styles.perfileImg}
              src={jorge} alt="JORGE" />
              <h4>Jorge Enrique Acosta de León</h4>
            </NavLink>
            <NavLink 
            className={styles.nav}
            to ="https://www.linkedin.com/in/lixicastrillon/"
            target="_blank">
              <img 
              className={styles.perfileImg}
              src={liced} alt="LICED" />
              <h4>Liced Xiomara Castrillon Lopez</h4>
            </NavLink>
            <NavLink 
            className={styles.nav}
            to ="https://www.linkedin.com/in/jose-rodrigo-galvis-galvis-446b88226/"
            target="_blank">
              <img 
              className={styles.perfileImg}
              src={jose} alt="GAL" />
              <h4>Jose Rodrigo Galvis Galvis</h4>
            </NavLink>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default AboutUs