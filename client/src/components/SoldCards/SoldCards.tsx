/// IMPORTS
import React from "react"
// STYLES
import styles from "./SoldCards.module.css"

// MY SOLD PRODUCTS
const SoldCards: React.FC = () => {
    return (
        <div className={styles.card}>
            <p>se ha vendido "" cantidad de:</p>
            <h1>titulo</h1>
        </div>
    );
};

export default SoldCards