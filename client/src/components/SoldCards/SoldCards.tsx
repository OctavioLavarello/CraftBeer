/// IMPORTS
import React from "react"
// STYLES
import styles from "./SoldCards.module.css"

// MY SOLD PRODUCTS
const SoldCards: React.FC = () => {
    return (
        <div className={styles.card}>
            <div>
                <p>se ha vendido "" cantidad de:</p>
                <div className={styles.content}>
                    <img src="" alt="imagen de producto" />
                    <h4>titulo</h4>
                    <h5>"" USD</h5>
                </div>
            </div>
            <div>
                <p>datos de comprador:</p>
                <div className={styles.content}>
                    <h5>Nombre: ""</h5>
                    <h5>Email: ""</h5>
                </div>
            </div>
            <h5>Date: ""/""/""</h5>
        </div>
    );
};

export default SoldCards