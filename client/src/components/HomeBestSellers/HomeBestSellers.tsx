/// IMPORTS
import React from "react";
// COMPONENTS
import MiniCard from "../miniCard/MiniCard";
// STYLES
import styles from "./HomeBestSellers.module.css"

// HOME FEATURED PRODUCTS
const HomeBestSellers: React.FC = () => {
    let imagen =
    "https://www.gustoargentino.com/cdn/shop/products/Cerveza-Rubia-Lager-Botella-Quilmes-34cl.png?v=1680723591";
    const cards = [
        { name: "beer_A", image: imagen },
        { name: "beer_B", image: imagen },
        { name: "beer_C", image: imagen },
    ]

    return (
        <div className={styles.div}>
            <h2>Best Sellers</h2>
            <div className={styles.bigContainer}>
                <div className={styles.container}>
                {cards.map((card) => (
                <MiniCard key={card.name} image={card.image} name={card.name} />
                ))}
                </div>
            </div>
        </div>
    );
};

export default HomeBestSellers