///IMPORTS
import React from "react";
import { NavLink } from "react-router-dom";
// STYLES
import styles from "./ChooseSignUp.module.css"
import buyer from "../../assets/icons/avatar.png"
import seller from "../../assets/icons/shop.png"

// CHOOSE SING UP
const ChooseSingUp: React.FC = () => {
    return (
        <div className={styles.all}>
            <h2>Te gustaria registrarte como:</h2>
            <div className={styles.select}>
                <NavLink 
                to="/buyerSignUp"
                className={styles.link}
                >
                    <div className={styles.imgDiv}>
                        <img src={buyer} alt="buyer" />
                    </div>
                    <div className={styles.h3Div}>
                        <h3>Buyer</h3>
                    </div>
                </NavLink>
                <NavLink 
                to="/sellerSignUp"
                className={styles.link}
                >
                    <div className={styles.imgDiv}>
                        <img src={seller} alt="seller" />
                    </div>
                    <div className={styles.h3Div}>
                        <h3>Seller</h3>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default ChooseSingUp