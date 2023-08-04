/// IMPORTS
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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GjjU0K8G0_yyogG3NQRRmpFYXIs_JBL_RCwyQUfTk1vP5OO49rpDI-JWOgBD_D3fuio&usqp=CAU",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/N%C3%BAmero_2.svg/768px-N%C3%BAmero_2.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/N%C3%BAmero_3.svg/2048px-N%C3%BAmero_3.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/N%C3%BAmero_4.svg/2048px-N%C3%BAmero_4.svg.png",
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
