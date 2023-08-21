/// IMPORTS
import React from "react"
// COMPONENTS
import SoldCards from "../SoldCards/SoldCards";
// STYLES
import styles from "./MySoldProducts.module.css"

// MY SOLD PRODUCTS
const MySoldProducts: React.FC = () => {
    return (
        <div className={styles.container}>
            <SoldCards/>
            <SoldCards/>
            <SoldCards/>
            <SoldCards/>
        </div>
    );
};

export default MySoldProducts