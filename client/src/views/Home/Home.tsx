/// IMPORTS
import React from "react"
// COMPONENTS
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import HomeFeaturedProducts from "../../components/HomeFeaturedProducts/HomeFeaturedProducts";
import HomeBestSellers from "../../components/HomeBestSellers/HomeBestSellers";
// STYLES
import styles from "./Home.module.css";

// HOME
const Home: React.FC = () => {
  return (
    <div className={styles.grandContainer}>
      <HomeCarousel/>
      <HomeFeaturedProducts/>
      <HomeBestSellers/>
    </div>
  );
};

export default Home;
