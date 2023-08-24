/// IMPORTS
import React from "react"
import { NavLink } from "react-router-dom";
// STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, CarouselItem } from "react-bootstrap";
import styles from "./HomeCarousel.module.css";
import image1 from "../../assets/img/image1.jpg"
import image2 from "../../assets/img/image2.jpg"
import image4 from "../../assets/img/image4.jpg"
import image3 from "../../assets/img/image3.png"

const HomeCarousel: React.FC = () => {
  // LOCAL STATES
  const images = [
    {
      src: image4,
      to: 1
    },
    {
      src: image1,
      to: 1
    },
    {
      src: image2,
      to: 1
    },
    {
      src: image3,
      to: 1
    },
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