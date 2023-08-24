/// IMPORTS
import React from "react"
import { NavLink } from "react-router-dom";
// STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, CarouselItem } from "react-bootstrap";
import styles from "./HomeCarousel.module.css";


const HomeCarousel: React.FC = () => {
  // LOCAL STATES
  const images = [
    { src: "https://3cordilleras.com/wp-content/uploads/2021/12/1.-nuestras-cervezas-scaled.jpeg",
    id: 1},
    { src:"https://lescuentoque.com.co/wp-content/uploads/2020/02/Cerveza-BBC-Cajic%C3%A1.jpg",
    id: 1},
    { src:"https://onlinelicor.es/wp-content/uploads/2019/02/Carlsberg-Pilsner.jpg",
    id: 1},
    { src:"https://www.italiaatavola.net/images/contenutiarticoli/quattro-luppoli-originale.jpg",
    id: 1},
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h2 className={styles.title}>Nuestras empresas</h2>
      <div className={styles.div}>
        <Carousel
          fade={true}
          indicators={true}
          className={styles.carousel}>
          {images.map((image, index) => (
            <CarouselItem key={index} >
              <div className={styles.carouselContainer}>
                <NavLink
                  to={`/home`}
                  className={styles.linkLeft}>
                  <img
                    src={images[(index - 1 + images.length) % images.length].src}
                    alt={`img${index - 1}`}
                  />
                </NavLink>
                <NavLink
                  to={`/home`}
                  className={styles.linkMain}>
                  <img
                    src={image.src}
                    alt={`img${index}`}
                  />
                </NavLink>
                <NavLink
                  to={`/home`}
                  className={styles.linkRight}>
                  <img
                    src={images[(index + 1) % images.length].src}
                    alt={`img${index + 1}`}
                  />
                </NavLink>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </div>

  );
};

export default HomeCarousel