/// IMPORTS
import React from "react"
import { NavLink } from "react-router-dom";
// STYLE
import styles from "./MiniCard.module.css"

// MINICARDS
interface MiniCardProps {
    name: string;
    image: string;
    id: string;
}

const MiniCard: React.FC<MiniCardProps> = ({name, image, id}) => {
    return (
        <div className={styles.container}>
            <NavLink to={`/detail/${id}`} className={styles.nav}>
                <div className={styles.img_Container}>
                    <img src={image} alt="card img" className={styles.img} />
                </div>
                <div className={styles.h2_Container}>
                    <h4>{name}</h4>
                </div>
            </NavLink>
        </div>
    )
}

export default MiniCard