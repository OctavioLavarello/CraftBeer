/// IMPORTS
import React, { useEffect, useState } from "react";
// COMPONENTS
import MiniCard from "../miniCard/MiniCard";
// STYLES
import styles from "./HomeFeaturedProducts.module.css"
import axios from "axios";

// HOME FEATURED PRODUCTS
interface featuredBeersInterface {
    id: string;
    image: string;
    name: string;
    type: string;
    description: string;
    ABV: number;
    presentation: string;
    price: number;
    stock: number;
    qualification: number;
    IBU: number;
    status: boolean,
    createdAt: string;
    updatedAt: string;
    userCompanyId: string;
}
const HomeFeaturedProducts: React.FC = () => {
    // LOCAL STATE
    const [featuredBeers, setFeaturedBeers] = useState<featuredBeersInterface[]>([]);
    // 2 ARRAYS
    const firstFourCards = featuredBeers?.slice(0, 4);
    const lastFourCards = featuredBeers?.slice(4, 8);
    // HANDLERS
    const handlerFeatured = async () => {
        try {
            const { data } = await axios.get("/toprated")
            setFeaturedBeers(data) 
        } catch (error) {
            console.log(error)
        }
    }
    console.log(featuredBeers)
    // USE EFFECTS
    useEffect(() => {
        handlerFeatured();
    }, []);
    return (
        <div className={styles.div}>
            <h2 className={styles.title}>Featured Products</h2>
            <div className={styles.bigContainer}>
                <div className={styles.container}>
                    {firstFourCards.map((card: any) => (
                        <MiniCard 
                        key={card.name} 
                        image={card.image} 
                        name={card.name} 
                        id={card.id}
                        />
                    ))}
                </div>
                <div className={styles.container}>
                    {lastFourCards.map((card: any) => (
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

export default HomeFeaturedProducts