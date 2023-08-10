/// IMPORTS
import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducer";
// COMPONENTS
import MiniCard from "../miniCard/MiniCard";
// STYLES
import styles from "./HomeFeaturedProducts.module.css"

// HOME FEATURED PRODUCTS
const HomeFeaturedProducts: React.FC = () => {
    const  allBeer  = useSelector((state: AppState) => state.allBeer)

    const firstFourCards = allBeer.slice(0, 4);
    const lastFourCards = allBeer.slice(4, 8);

    return (
        <div className={styles.div}>
            <h2 className={styles.title}>Featured Products</h2>
            <div className={styles.bigContainer}>
                <div className={styles.container}>
                    {firstFourCards.map((card: any) => (
                        <MiniCard 
                        key={card.name} 
                        image={card.image} 
                        name={card.name} 
                        id={card.id}
                        />
                    ))}
                </div>
                <div className={styles.container}>
                    {lastFourCards.map((card: any) => (
                        <MiniCard 
                        key={card.name} 
                        image={card.image} 
                        name={card.name} 
                        id={card.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeFeaturedProducts