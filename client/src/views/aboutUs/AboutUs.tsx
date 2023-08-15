///IMPORTS
import React from "react";
import { NavLink } from "react-router-dom";
// STYLES
import styles from "./AboutUs.module.css"
import img from "../../assets/img/AboutUs.png"

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
              src="https://media.licdn.com/dms/image/D4E35AQHNYFL1XcTC4w/profile-framedphoto-shrink_200_200/0/1690052993254?e=1691942400&v=beta&t=JJPaczWeJLbm5XSV1z6VEnisfkcD3sOc1K8jBkCW-GU" alt="ELY" />
              <h4>Ely Samuel Guaimacuto</h4>
            </NavLink>
            <NavLink 
            className={styles.nav}
            to ="https://www.linkedin.com/in/german-conil-2220b195/"
            target="_blank">
              <img 
              className={styles.perfileImg}
              src="https://media.licdn.com/dms/image/D4D35AQHb26ld13h-Lw/profile-framedphoto-shrink_200_200/0/1686610668319?e=1691942400&v=beta&t=9sf9hDcMwMnplllKHpRLE_7y77kuDIK0Eqb9FlTx3j0" alt="GERMAN" />
              <h4>German Conil</h4>
            </NavLink>
            <NavLink 
            className={styles.nav}
            to ="https://www.linkedin.com/in/agustin-rosa-37ab2a26a/"
            target="_blank">
              <img 
              className={styles.perfileImg}
              src="https://media.licdn.com/dms/image/D5635AQGXW0U7XhrOLA/profile-framedphoto-shrink_200_200/0/1660002666757?e=1691942400&v=beta&t=cxjF53TQhjhmmtIIOyY1fzbFjNj7IDeZDJwPAY4kzHI" alt="AGUS" />
              <h4>Agustin Rosa</h4>
            </NavLink>
            <NavLink 
            className={styles.nav}
            to ="https://www.linkedin.com/in/octavio-lavarello-175342271/"
            target="_blank">
              <img 
              className={styles.perfileImg}
              src="https://media.licdn.com/dms/image/D5635AQGXW0U7XhrOLA/profile-framedphoto-shrink_200_200/0/1660002666757?e=1691942400&v=beta&t=cxjF53TQhjhmmtIIOyY1fzbFjNj7IDeZDJwPAY4kzHI" alt="OCTA" />
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
              src="https://media.licdn.com/dms/image/D4D35AQHZPXtzeqUulg/profile-framedphoto-shrink_200_200/0/1678726219256?e=1691942400&v=beta&t=5zGIJaIhJEBY4UCFUSuJAvOL5HnQ_lPLeRlWJVwTZII" alt="ALEX" />
              <h4>Alexis David Weber</h4>
            </NavLink>
            <NavLink 
            className={styles.nav}
            to ="https://www.linkedin.com/in/jorge-enrique-acosta-de-le%C3%B3n-8934a4122/"
            target="_blank">
              <img 
              className={styles.perfileImg}
              src="https://media.licdn.com/dms/image/D4E35AQGM6RDJlxEpJw/profile-framedphoto-shrink_200_200/0/1690572184866?e=1692025200&v=beta&t=f-0dinc2TE-2zN_1EAzoRbIxRf8uYrlJ9MbHk0Orc0Q" alt="JORGE" />
              <h4>Jorge Enrique Acosta de León</h4>
            </NavLink>
            <NavLink 
            className={styles.nav}
            to ="https://www.linkedin.com/in/lixicastrillon/"
            target="_blank">
              <img 
              className={styles.perfileImg}
              src="https://media.licdn.com/dms/image/D4E35AQHYtWQklkjZZQ/profile-framedphoto-shrink_200_200/0/1687964177576?e=1691942400&v=beta&t=tZwlxjdPbDeNylz7mDXU5THrTLIvz0Av1gA-VhU8Zzo" alt="LICED" />
              <h4>Liced Xiomara Castrillon Lopez</h4>
            </NavLink>
            <NavLink 
            className={styles.nav}
            to ="https://www.linkedin.com/in/jose-rodrigo-galvis-galvis-446b88226/"
            target="_blank">
              <img 
              className={styles.perfileImg}
              src="https://media.licdn.com/dms/image/D4E03AQGu9ju6UXUZwg/profile-displayphoto-shrink_200_200/0/1691464249848?e=1697068800&v=beta&t=Q9mk0hsIWGBwqMxOcyGT2BJFgKdGJsuu_ozzE-6g6U8" alt="GAL" />
              <h4>Jose Rodrigo Galvis Galvis</h4>
            </NavLink>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default AboutUs