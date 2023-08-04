/// IMPORTS
import React from "react";
// COMPONENTS
import MiniCard from "../miniCard/MiniCard";
// STYLES
import styles from "./HomeFeaturedProducts.module.css"

// HOME FEATURED PRODUCTS
const HomeFeaturedProducts: React.FC = () => {
    let imagen =
    "https://www.gustoargentino.com/cdn/shop/products/Cerveza-Rubia-Lager-Botella-Quilmes-34cl.png?v=1680723591";
    const cards = [
        { name: "beer1", image: imagen },
        { name: "beer2", image: imagen },
        { name: "beer3", image: imagen },
        { name: "beer4", image: imagen },
        { name: "beer5", image: imagen },
        { name: "beer6", image: imagen },
        { name: "beer7", image: imagen },
        { name: "beer8", image: imagen },
    ]

    const firstFourCards = cards.slice(0, 4);
    const lastFourCards = cards.slice(4);

    return (
        <div className={styles.div}>
            <h2>Featured Products</h2>
            <div className={styles.bigContainer}>
                <div className={styles.container}>
                    {firstFourCards.map((card) => (
                        <MiniCard key={card.name} image={card.image} name={card.name} />
                    ))}
                </div>
                <div className={styles.container}>
                    {lastFourCards.map((card) => (
                        <MiniCard key={card.name} image={card.image} name={card.name} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeFeaturedProducts