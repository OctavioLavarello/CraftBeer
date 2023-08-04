/// IMPORTS
import React, { useState } from "react";
// COMPONENTS
import HomeFeaturedProducts from "../../components/HomeFeaturedProducts/HomeFeaturedProducts";
import HomeBestSellers from "../../components/HomeBestSellers/HomeBestSellers";
// STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, CarouselItem } from "react-bootstrap";
import styles from "./Home.module.css";

// HOME
const Home: React.FC = () => {
  // LOCAL STATES
  const img = [
    "https://i.pinimg.com/originals/45/fc/d6/45fcd69308435f8762f546912e770159.jpg",
    "https://w.forfun.com/fetch/6b/6b53ccdda60e6d052d9c9782baffa35b.jpeg",
    "https://i.pinimg.com/originals/d1/8c/22/d18c2215872567419c93405fb963387c.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5frij-0iqQuXlwj3k2UpgFkXT6Z7QIMqBTQ&usqp=CAU",
  ];

  return (
    <div>
      <div className={styles.div}>
        <Carousel fade={true} indicators={true} className={styles.carousel}>
          {img.map((image, index) => (
            <CarouselItem key={index} >
              <div className={styles.carouselContainer}>
                <img
                  src={img[(index - 1 + img.length) % img.length]}
                  alt={`img${index - 1}`}
                  className={styles.img}
                />
                <img
                  src={image}
                  alt={`img${index}`}
                  className={styles.imgMajor}
                />
                <img
                  src={img[(index + 1) % img.length]}
                  alt={`img${index + 1}`}
                  className={styles.img}
                />
              </div>
            </CarouselItem>
          ))}
        </Carousel> 
      </div>
      <div>
        <HomeFeaturedProducts/>
      </div>
      <div>
        <HomeBestSellers/>
      </div>
    </div>
  );
};

export default Home;
