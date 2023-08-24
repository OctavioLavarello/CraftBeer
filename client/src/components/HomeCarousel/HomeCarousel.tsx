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
    {
      src: "https://i.postimg.cc/sf9Q4zVf/fotor-2023-8-23-22-2-44-fotor-202308232234.jpg",

      to: 1
    },
    {
      src: "https://i.postimg.cc/sDjBnLXY/fotor-2023-8-23-22-7-49-fotor-2023082322844.jpg",
      to: 1
    },
    {
      src: "https://i.postimg.cc/q7SnSxYk/fotor-2023-8-23-22-5-36-fotor-202308232265.jpg",

      to: 1
    },
    {
      src: "https://i.postimg.cc/bNmZ4RDK/fotor-2023-8-23-22-10-49-fotor-2023082322140.png",
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