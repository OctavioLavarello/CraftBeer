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
            En este emocionante proyecto, ocho compañeros apasionados por la cerveza y la creatividad
            se unieron para crear un punto de encuentro entre marcas de cervezas artesanales 
            y amantes de esta exquisita bebida. Nuestra misión es ofrecer a nuestros clientes 
            una experiencia única al acceder a una amplia selección de cervezas artesanales 
            de diferentes marcas, elaboradas con dedicación y cariño.!
          </p>
          <p>
            Somos un espacio virtual en el que pequeñas y reconocidas marcas de cervezas artesanales 
            se reúnen para mostrar sus productos y compartir su historia. 
            Creemos en el poder de la comunidad cervecera y estamos comprometidos 
            a apoyar a los cerveceros independientes y su pasión por la calidad.
          </p>
          <p>
            Nuestra tienda en línea es un rincón donde puedes explorar y descubrir nuevos
              sabores, conocer las últimas novedades del mundo cervecero y, sobre todo, disfrutar
              de la experiencia de comprar cervezas únicas y especiales.
          </p>
          <p>
            Así que, si eres un amante de la cerveza artesanal, estás en el lugar indicado.
            Explora nuestra selección, sumérgete en el fascinante mundo de las cervezas
            únicas y únete a nosotros en este emocionante viaje cervecero.
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