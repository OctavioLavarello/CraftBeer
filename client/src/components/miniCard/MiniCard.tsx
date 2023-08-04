/// IMPORTS
import React from "react"
import { NavLink } from "react-router-dom";
// STYLE
import styles from "./MiniCard.module.css"

// MINICARDS
interface MiniCardProps {
    name: string;
    image: string;
}

const MiniCard: React.FC<MiniCardProps> = ({name, image}) => {
    return (
        <div className={styles.container}>
            <NavLink to="/detail/:id" className={styles.nav}>
                <div className={styles.img_Container}>
                    <img src={image} alt="card img" className={styles.img} />
                </div>
                <div className={styles.h2_Container}>
                    <h2>{name}</h2>
                </div>
            </NavLink>
        </div>
    )
}

export default MiniCard