/// IMPORTS
import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducer";
// COMPONENTS
import MiniCard from "../miniCard/MiniCard";
// STYLES
import styles from "./HomeBestSellers.module.css"

// HOME FEATURED PRODUCTS
const HomeBestSellers: React.FC = () => {
    // GLOBAL STATE
    const { allBeer } = useSelector((state: AppState) => state)
    
    const threeCards = allBeer.slice(0, 3);

    return (
        <div className={styles.div}>
            <h2 className={styles.title}>Best Sellers</h2>
            <div className={styles.bigContainer}>
                <div className={styles.container}>
                {threeCards.map((card: any) => (
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

export default HomeBestSellers