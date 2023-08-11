/// IMPORTS
import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
// COMPONENTS
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import HomeFeaturedProducts from "../../components/HomeFeaturedProducts/HomeFeaturedProducts";
import HomeBestSellers from "../../components/HomeBestSellers/HomeBestSellers";
// ACTIONS
import { allBeers, verificationLogin } from "../../redux/actions/actions";
// STYLES
import styles from "./Home.module.css";

// HOME
const Home: React.FC = () => {
  const dispatch = useDispatch(); 
  
  useEffect(() => {
    dispatch(allBeers())
  }, []);
  useEffect(()=>{
    const userJSON = localStorage.getItem("user")
    console.log(userJSON);
    
    if(userJSON){
      const user = JSON.parse(userJSON)
      dispatch(verificationLogin(user))
      console.log(user);
    }
  }, [dispatch])


  return (
    <div className={styles.grandContainer}>
      <HomeCarousel/>
      <HomeFeaturedProducts/>
      <HomeBestSellers/>
    </div>
  );
};

export default Home;
