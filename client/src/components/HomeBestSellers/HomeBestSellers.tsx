/// IMPORTS
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store"
// COMPONENTS
import MiniCard from "../miniCard/MiniCard";
// ACTIONS
import { allBeers } from "../../redux/actions/actions";
// STYLES
import styles from "./HomeBestSellers.module.css"

// HOME FEATURED PRODUCTS
const HomeBestSellers: React.FC = () => {
    const dispatch = useDispatch(); 
    useEffect(() => {
        dispatch(allBeers())
    }, []);
    const { allBeer } = useSelector((state: RootState) => state)
    
    return (
        <div className={styles.div}>
            <h2>Best Sellers</h2>
            <div className={styles.bigContainer}>
                <div className={styles.container}>
                {allBeer.map((card: any) => (
                <MiniCard key={card.name} 
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