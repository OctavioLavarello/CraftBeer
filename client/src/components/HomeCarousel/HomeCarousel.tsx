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
        { src: "https://i.pinimg.com/originals/45/fc/d6/45fcd69308435f8762f546912e770159.jpg",
        id: 1},
        { src:"https://w.forfun.com/fetch/6b/6b53ccdda60e6d052d9c9782baffa35b.jpeg",
        id: 2},
        { src:"https://i.pinimg.com/originals/d1/8c/22/d18c2215872567419c93405fb963387c.jpg",
        id: 3},
        { src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC8Ilunn0UEp8Vy0hTNZsylnTYyQJGO5PFL7GgFn6-W-4yuaj6bxU0_B8TtgvT-pcvEcc&usqp=CAU",
        id: 4},
        { src:"https://img2.s3wfg.com/web/img/images_uploaded/9/5/inbev.jpg",
        id: 5}
    ];
    
    return (
      <div className={styles.div}>
        <Carousel
        fade={true}  
        indicators={true} 
        className={styles.carousel}>
          {images.map((image, index) => (
            <CarouselItem key={index} >
              <div className={styles.carouselContainer}>
                <NavLink 
                to={`/detail/${image.id}`}
                className={styles.linkLeft}>
                  <img
                    src={images[(index - 1 + images.length) % images.length].src}
                    alt={`img${index - 1}`}
                  />
                </NavLink>
                <NavLink 
                to={`/detail/${image.id}`}
                className={styles.linkMain}>
                  <img
                    src={image.src}
                    alt={`img${index}`}
                  />
                </NavLink>
                <NavLink 
                to={`/detail/${image.id}`}
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
    );
};

export default HomeCarousel