/// IMPORTS
import React from "react"
import { useSelector } from "react-redux"
import { AppState } from "../../redux/reducer";
// STYLES
import styles from "./Error.module.css"

// ERROR VIEW
const Error: React.FC = () => {
    // LOCAL STORAGE
    const { accessLogin } = useSelector((state: AppState) => state);
    return (
        <div className={styles.all}>
            <div className={styles.avatarCont}>
                <img 
                src="https://img.freepik.com/vector-premium/cerveza-caricatura-cara-triste_52422-127.jpg?w=740"
                alt="avatar"
                className={styles.avatar}
                />
            </div>
            <div className={styles.error}>
                <h1>ERROR PAGE 404</h1>
                {accessLogin.role === "" ? 
                (
                    <h2>Page not found</h2>
                ) : 
                (
                    <h2>As <strong>{accessLogin.role}</strong>  you do not have access to this page</h2>
                )
                }
            </div>
        </div>
    )
}

export default Error