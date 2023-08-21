/// IMPORTS
import React from "react"
// STYLES
import styles from "./SoldCards.module.css"

// MY SOLD PRODUCTS
// INTERFACE:
interface SoldCardProps {
    amount: number;
    buyerEmail: string;
    buyerName: string;
    date: string;
    description: string;
    image: string;
    name: string;
    price: number;
    totalPrice: number;
}
const SoldCards: React.FC<SoldCardProps> = ({ name, date, image , amount, totalPrice, buyerEmail, buyerName }) => {
    return (
        <div className={styles.card}>
            <div>
                <p>{amount} units have been sold of:</p>
                <div className={styles.content}>
                    <img src={image} alt={name} className={styles.img}/>
                    <h4>{name}</h4>
                    <h5>Total Price: ${totalPrice} USD</h5>
                </div>
            </div>
            <div>
                <p>Buyer's data:</p>
                <div className={styles.content}>
                    <h5>Name: {buyerName}</h5>
                    <h5>Email: {buyerEmail}</h5>
                </div>
            </div>
            <h5>Date of sale: {date}</h5>
        </div>
    );
};

export default SoldCards