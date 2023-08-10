/// IMPORTS
import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
// COMPONENTS
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import HomeFeaturedProducts from "../../components/HomeFeaturedProducts/HomeFeaturedProducts";
import HomeBestSellers from "../../components/HomeBestSellers/HomeBestSellers";
// ACTIONS
import { allBeers } from "../../redux/actions/actions";
// STYLES
import styles from "./Home.module.css";

// HOME
const Home: React.FC = () => {
  const dispatch = useDispatch(); 
  
  useEffect(() => {
    dispatch(allBeers())
  }, []);

  return (
    <div className={styles.grandContainer}>
      <HomeCarousel/>
      <HomeFeaturedProducts/>
      <HomeBestSellers/>
    </div>
  );
};

export default Home;
