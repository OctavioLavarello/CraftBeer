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
            {amount === 1 ? 
            (
                <h6>sold <strong>{amount}</strong> unit of:</h6>
            ) : 
            (
                <h6><strong>{amount}</strong> units have been sold of:</h6>
            )}
            <div className={styles.content}>
                <img src={image} alt={name} className={styles.img}/>
                <div>
                    <div className={styles.div}>
                        <h5><strong>{name}</strong></h5>
                        <h6>Total Price: $<strong>{totalPrice}</strong> USD</h6>
                    </div>
                    <div className={styles.div2}>
                        <h6>Buyer's data:</h6>
                        <div>
                            <h6>Name: <strong>{buyerName}</strong></h6>
                            <h6>Email:  
                                <a 
                                href={`mailto:${buyerEmail}?subject=Hola%20${buyerName}`} 
                                target="_blank"
                                >
                                    <strong> {buyerEmail}</strong>
                                </a>
                            </h6>
                            <h6>Date of sale: <strong>{date}</strong></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SoldCards